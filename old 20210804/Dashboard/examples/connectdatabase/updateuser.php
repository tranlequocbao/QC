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
    
    $sql= "update username set IDuser='".$IDuser."', Name='".$Fullname."',Dept='".$Dept."',Type='".$Type."',Shop='".$Shop."' , Position='".$Position."',Station='".$Station."' where IDuser='".$IDuser."'";
    //$sql= "insert into username(IDuser,Name,Dept,Type) values('$IDuser',' $Fullname',' $Dept','$Type')";
    // alert($IDuser+$Fullname+$Dept+$Type+$Shop);
    if (mysqli_query($conn, $sql)) {
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo json_encode(array("statusCode"=>201));
	}
	mysqli_close($conn);

?>