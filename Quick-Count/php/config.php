<?php
	$server = "localhost";
	$user = "root";
	$pass = "";
	$db = "php_arkademy";

	$conn = new mysqli($server, $user, $pass, $db);

	if ($conn->connect_error) {
		echo "koneksi gagal";
	}
?>