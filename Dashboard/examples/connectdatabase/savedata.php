<?php

    //require './connectdata.php';
    $servername = "localhost";
	$username = "root";
	$password = "";
	$db="qc_han";
	$conn = mysqli_connect($servername, $username, $password,$db);
    $IDuser = $_POST['IDuser'];
    $Fullname=$_POST['Fullname'];
    $Dept=$_POST['Dept'];
    $Type=$_POST['Type'];
    $Shop=$_POST['Shop'];
    $Position=$_POST['Position'];
    $Station=$_POST['Station']=='Có'?'1':'0';
    
    $sql= "insert into username(IDuser,Name,Dept,Type,Shop,Position,station) values('$IDuser',' $Fullname',' $Dept','$Type','$Shop','$Position','$Station')";
    //$sql= "insert into username(IDuser,Name,Dept,Type) values('$IDuser',' $Fullname',' $Dept','$Type')";
    // alert($IDuser+$Fullname+$Dept+$Type+$Shop);
    if (mysqli_query($conn, $sql)) {
		echo json_encode(['statusCode'=>200,'query'=>$sql]);
	} 
	else {
		echo json_encode(array("statusCode"=>201,'query'=>$sql));
	}
	mysqli_close($conn);

?>

