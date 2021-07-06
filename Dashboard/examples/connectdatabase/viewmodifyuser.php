<?php 
$severname='localhost';
$username='root';
$password='';
$db='qc_han';
$id=$_POST['IDuser'];
    $conn=mysqli_connect($severname,$username,$password,$db);
	$arry =[];
    $query='select * from username where IDuser="'.$id.'"';
    $result=$conn->query($query);
    if($result->num_rows>0){
        while($row=$result->fetch_assoc()){
			$station=$row['station']=='1'?'Có':'Không';
			echo json_encode([
				'ID'=>$row['IDuser'],
				'Fullname'=>$row['Name'],
				'Dept'=>$row['Dept'],
				'Type'=>$row['Type'],
				'Shop'=>$row['Shop'],
				'Positon'=>$row['Position'],
				'Station'=>$station
			]);		
			// $arry[0]= $row['IDuser'];
			// $arry[1]= $row['Name'];
			// $arry[2]= $row['Dept'];
			// echo json_encode($arry);
    }
}
else{
    echo "Khong co du lieu";


}
mysqli_close($conn);

?>