<?php
require __DIR__ . '/lib.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    jsonOut(405, ['ok' => false, 'message' => 'Không tìm thấy']);
}

$body = readJsonBody(20000);
if (!sameSecret((string) ($body['username'] ?? ''), ADMIN_USER) || !sameSecret((string) ($body['password'] ?? ''), ADMIN_PASSWORD)) {
    jsonOut(401, ['ok' => false, 'message' => 'Sai tài khoản hoặc mật khẩu']);
}

$sessions = loadSessions();
$now = time();
foreach ($sessions as $key => $expires) {
    if (!is_int($expires) || $expires < $now) {
        unset($sessions[$key]);
    }
}
$token = bin2hex(random_bytes(24));
$sessions[$token] = $now + 60 * 60 * 24 * 14;
saveSessions($sessions);
jsonOut(200, ['ok' => true, 'token' => $token]);
