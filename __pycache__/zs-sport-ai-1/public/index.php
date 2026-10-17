<?php

require_once '../db.php';
require_once '../src/routes/api.php';

// Start the session
session_start();

// Handle incoming requests
$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Route the request to the appropriate handler
switch ($requestUri) {
    case '/api':
        ApiRoutes::handleRequest($requestMethod);
        break;
    default:
        http_response_code(404);
        echo json_encode(['message' => 'Not Found']);
        break;
}
?>