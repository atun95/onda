<?php
require __DIR__ . '/lib.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
    jsonOut(405, ['ok' => false, 'message' => 'Không tìm thấy']);
}

$ok = authorized();
jsonOut($ok ? 200 : 401, ['ok' => $ok]);
