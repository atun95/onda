<?php
require __DIR__ . '/lib.php';

$method = $_SERVER['REQUEST_METHOD'] ?? '';
if ($method !== 'POST' && $method !== 'PUT') {
    jsonOut(405, ['ok' => false, 'message' => 'Không tìm thấy']);
}

requireAuth();
$body = readJsonBody(5000000);
$rows = normalizeRows($body['rows'] ?? null);
writeCatalog($rows);
jsonOut(200, ['ok' => true, 'rows' => readCatalog()]);
