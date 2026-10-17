<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$host = "localhost";
$dbname = "zs_sport_ai";
$username = "root";
$password = "";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password
    );

    $pdo->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );

    echo "Verbinding met de database is gelukt!";

} catch (PDOException $e) {
    echo "Databaseverbinding mislukt: "
        . htmlspecialchars($e->getMessage());
}
?>
