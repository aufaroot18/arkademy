<?php
include("config.php");

if (isset($_GET["id"])) {
	$id = $_GET["id"];
	$sql = "update candidates set earned_vote = earned_vote + 1 where id =$id";
	$result = $conn->query($sql);

	if ($result) {
		header("location: ../index.php");
	}
}
?>