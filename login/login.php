<?php

 session_start();


$severname='localhost';
$username='root';
$password='';
$db='qc_han';
if(isset($_POST['submit'])){
    $id=$_POST['pass'];
}
    
    $conn=mysqli_connect($severname,$username,$password,$db);
    $query='select * from username where IDuser="'.$id.'"';
    $result=$conn->query($query);
    if($result->num_rows>0){
        while($row=$result->fetch_assoc()){
		$_SESSION['Shop']=$row['Shop'];
        $_SESSION['Station']=$row['Type'];
        $_SESSION['Name']=$row['Name'];
        $_SESSION['Position']=$row['Position'];
        $_SESSION['Dept']=$row['Dept'];
        $_SESSION['IDuser']=$row['IDuser'];
        $_SESSION['Create']=$row['station'];
        header('Location: ../');
    }
}
else{
    // echo "User chưa được đăng ký hoặc sai mã số";

    echo "<script>alert('User đăng nhập không đúng')</script>";

}
mysqli_close($conn);

?>