<?php

require_once '../../db.php';
require_once '../controllers/index.php';

$router = new Router();

$router->get('/api/data', function() {
    $controller = new IndexController();
    return $controller->getData();
});

$router->post('/api/data', function() {
    $controller = new IndexController();
    return $controller->createData();
});

// Add more routes as needed

class Router {
    private $routes = [];

    public function get($uri, $callback) {
        $this->routes['GET'][$uri] = $callback;
    }

    public function post($uri, $callback) {
        $this->routes['POST'][$uri] = $callback;
    }

    public function handleRequest($method, $uri) {
        if (isset($this->routes[$method][$uri])) {
            return call_user_func($this->routes[$method][$uri]);
        }
        http_response_code(404);
        echo json_encode(['error' => 'Not Found']);
    }
}

// Handle the incoming request
$method = $_SERVER['REQUEST_METHOD'];
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$router->handleRequest($method, $uri);

?>