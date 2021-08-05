<?php 
$severname='localhost';
$username='root';
$password='';
$db='qc_han';
$id=$_POST['id'];
    $conn=mysqli_connect($severname,$username,$password,$db);
    $query='delete from username where IDuser="'.$id.'"';
    $result=$conn->query($query);
    if (mysqli_query($conn, $sql)) {
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo json_encode(array("statusCode"=>201));
	}
	mysqli_close($conn);
?>