<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$host = "localhost";
$dbname = "zs_sport_ai";
$username = "root";
$password = "";

echo "PHP werkt.<br>";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password
    );

    echo "Verbinding met MySQL is gelukt!";
} catch (PDOException $e) {
    echo "Fout: " . $e->getMessage();
}
?>
