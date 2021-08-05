<?php
if (!isset($_SESSION)) session_start();
include '../connectdata.php';



$vincode = $_POST['vincode'] ?? '';
$query_select ='select note from note_car where vin_code="'.$vincode.'"';
$result=$conn->query($query_select);
if($result->num_rows>0){
    $row=$result->fetch_assoc();
    echo json_encode(['code'=>200,'note'=>$row['note'],'mess'=>'select ok']);
}
else{
    echo json_encode(['code'=>201,'mess'=>'select fail','query'=>$query_select]);
}
return;
