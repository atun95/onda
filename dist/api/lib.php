<?php

const ADMIN_USER = 'admin';
const ADMIN_PASSWORD = 'Ondata@2026';
const CATEGORIES = ['aio', 'monitor', 'keyboard', 'mouse', 'ram', 'accessories'];

function siteRoot(): string
{
    return dirname(__DIR__);
}

function catalogFile(): string
{
    return siteRoot() . '/data/catalog.json';
}

function sessionFile(): string
{
    return siteRoot() . '/data/.sessions.json';
}

function imageDir(): string
{
    return siteRoot() . '/images/products';
}

function jsonOut(int $status, array $body): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

function readJsonBody(int $limit): array
{
    $raw = file_get_contents('php://input');
    if ($raw === false) {
        jsonOut(400, ['ok' => false, 'message' => 'Không đọc được dữ liệu']);
    }
    if (strlen($raw) > $limit) {
        jsonOut(413, ['ok' => false, 'message' => 'Dữ liệu quá lớn']);
    }
    $data = json_decode($raw !== '' ? $raw : '{}', true);
    if (!is_array($data)) {
        jsonOut(400, ['ok' => false, 'message' => 'Dữ liệu không hợp lệ']);
    }
    return $data;
}

function sameSecret(string $given, string $expected): bool
{
    return hash_equals(hash('sha256', $expected), hash('sha256', $given));
}

function bearerToken(): string
{
    $header = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? '';
    if ($header === '' && function_exists('apache_request_headers')) {
        $headers = apache_request_headers();
        foreach ($headers as $name => $value) {
            if (strcasecmp($name, 'Authorization') === 0) {
                $header = $value;
                break;
            }
        }
    }
    if (preg_match('/^Bearer\s+(\S+)$/i', $header, $match)) {
        return $match[1];
    }
    return '';
}

function loadSessions(): array
{
    $file = sessionFile();
    if (!is_file($file)) {
        return [];
    }
    $data = json_decode((string) file_get_contents($file), true);
    return is_array($data) ? $data : [];
}

function saveSessions(array $sessions): void
{
    $dir = dirname(sessionFile());
    if (!is_dir($dir) && !mkdir($dir, 0775, true) && !is_dir($dir)) {
        jsonOut(500, ['ok' => false, 'message' => 'Không tạo được thư mục data trên hosting']);
    }
    $tmp = sessionFile() . '.tmp';
    if (file_put_contents($tmp, json_encode($sessions), LOCK_EX) === false) {
        jsonOut(500, ['ok' => false, 'message' => 'Hosting không cho ghi file phiên đăng nhập']);
    }
    if (!rename($tmp, sessionFile())) {
        jsonOut(500, ['ok' => false, 'message' => 'Không lưu được phiên đăng nhập']);
    }
}

function authorized(): bool
{
    $token = bearerToken();
    if ($token === '') {
        return false;
    }
    $sessions = loadSessions();
    $now = time();
    $changed = false;
    foreach ($sessions as $key => $expires) {
        if (!is_int($expires) || $expires < $now) {
            unset($sessions[$key]);
            $changed = true;
        }
    }
    $ok = isset($sessions[$token]);
    if ($changed) {
        saveSessions($sessions);
    }
    return $ok;
}

function requireAuth(): void
{
    if (!authorized()) {
        jsonOut(401, ['ok' => false, 'message' => 'Phiên đăng nhập đã hết. Hãy đăng nhập lại.']);
    }
}

function cleanText($value, int $max): string
{
    return substr((string) $value, 0, $max);
}

function readCatalog(): array
{
    $file = catalogFile();
    if (!is_file($file)) {
        return [];
    }
    $rows = json_decode((string) file_get_contents($file), true);
    return is_array($rows) ? $rows : [];
}

function writeCatalog(array $rows): void
{
    $dir = dirname(catalogFile());
    if (!is_dir($dir) && !mkdir($dir, 0775, true) && !is_dir($dir)) {
        jsonOut(500, ['ok' => false, 'message' => 'Không tạo được thư mục data trên hosting']);
    }
    $tmp = catalogFile() . '.tmp';
    $json = json_encode(array_values($rows), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    if ($json === false || file_put_contents($tmp, $json, LOCK_EX) === false) {
        jsonOut(500, ['ok' => false, 'message' => 'Hosting không cho ghi file data/catalog.json. Hãy bật quyền ghi cho thư mục data.']);
    }
    if (!rename($tmp, catalogFile())) {
        jsonOut(500, ['ok' => false, 'message' => 'Không lưu được danh sách sản phẩm']);
    }
}

function normalizeRows($rows): array
{
    if (!is_array($rows) || count($rows) > 500) {
        jsonOut(400, ['ok' => false, 'message' => 'Danh sách sản phẩm không hợp lệ']);
    }
    $clean = [];
    foreach ($rows as $row) {
        if (!is_array($row) || !in_array($row['category'] ?? '', CATEGORIES, true)) {
            jsonOut(400, ['ok' => false, 'message' => 'Danh mục không hợp lệ']);
        }
        $name = trim(cleanText($row['name'] ?? '', 300));
        if ($name === '') {
            jsonOut(400, ['ok' => false, 'message' => 'Tên sản phẩm không được để trống']);
        }
        $images = $row['images'] ?? [];
        if (!is_array($images) || count($images) > 12) {
            jsonOut(400, ['ok' => false, 'message' => 'Ảnh sản phẩm không hợp lệ']);
        }
        $savedImages = [];
        foreach ($images as $image) {
            $image = trim(cleanText($image, 500));
            if ($image !== '') {
                $savedImages[] = $image;
            }
        }
        $clean[] = [
            'id' => trim(cleanText($row['id'] ?? '', 120)),
            'stt' => (int) ($row['stt'] ?? 0),
            'category' => $row['category'],
            'name' => $name,
            'specs' => cleanText($row['specs'] ?? '', 20000),
            'notes' => cleanText($row['notes'] ?? '', 20000),
            'shortDesc' => cleanText($row['shortDesc'] ?? '', 5000),
            'detail' => cleanText($row['detail'] ?? '', 100000),
            'images' => array_slice($savedImages, 0, 12),
        ];
    }
    return $clean;
}

function saveUploadedImage(string $dataUrl): string
{
    if (!preg_match('#^data:(image/(?:jpeg|png|webp|gif));base64,([a-z0-9+/=\r\n]+)$#i', $dataUrl, $match)) {
        jsonOut(400, ['ok' => false, 'message' => 'Chỉ nhận ảnh JPG, PNG, WEBP hoặc GIF']);
    }
    $binary = base64_decode($match[2], true);
    if ($binary === false || $binary === '' || strlen($binary) > 8000000) {
        jsonOut(400, ['ok' => false, 'message' => 'Mỗi ảnh tối đa 8MB']);
    }
    $info = @getimagesizefromstring($binary);
    $allowed = [IMAGETYPE_JPEG => 'jpg', IMAGETYPE_PNG => 'png', IMAGETYPE_WEBP => 'webp', IMAGETYPE_GIF => 'gif'];
    if ($info === false || !isset($allowed[$info[2]])) {
        jsonOut(400, ['ok' => false, 'message' => 'Tệp tải lên không phải ảnh hợp lệ']);
    }
    $dir = imageDir();
    if (!is_dir($dir) && !mkdir($dir, 0775, true) && !is_dir($dir)) {
        jsonOut(500, ['ok' => false, 'message' => 'Không tạo được thư mục ảnh trên hosting']);
    }
    $filename = time() . '-' . bin2hex(random_bytes(4)) . '.' . $allowed[$info[2]];
    if (file_put_contents($dir . '/' . $filename, $binary, LOCK_EX) === false) {
        jsonOut(500, ['ok' => false, 'message' => 'Hosting không cho lưu ảnh. Hãy bật quyền ghi cho thư mục images/products.']);
    }
    return '/images/products/' . $filename;
}
