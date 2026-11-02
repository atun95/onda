<?php
require __DIR__ . '/lib.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    jsonOut(405, ['ok' => false, 'message' => 'Không tìm thấy']);
}

requireAuth();
$body = readJsonBody(12000000);
jsonOut(200, ['ok' => true, 'image' => saveUploadedImage((string) ($body['dataUrl'] ?? ''))]);
