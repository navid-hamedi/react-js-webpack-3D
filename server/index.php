<?php
// index.php

// Enable CORS (Cross-Origin Resource Sharing) if needed
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Check the request method
$method = $_SERVER['REQUEST_METHOD'];

// Determine the API endpoint based on the request URL
$endpoint = $_SERVER['REQUEST_URI'];

// Remove any query parameters from the endpoint
$endpoint = strtok($endpoint, '?');

// Remove the leading slash from the endpoint
$endpoint = ltrim($endpoint, '/');

// Include the appropriate PHP file based on the endpoint
$file = __DIR__ . '/server/' . $endpoint . '.php';

// Check if the requested file exists
if (file_exists($file)) {
    // Include the PHP file
    include_once $file;
} else {
    // Return an error response for invalid endpoints
    http_response_code(404); // Not Found
    echo json_encode(['error' => 'Invalid API endpoint']);
}