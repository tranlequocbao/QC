<?php
if (!isset($_SESSION)) session_start();
if (!isset($_SESSION['IDuser'])) {
    echo json_encode([
        'code' => 401,
        'message' => 'Please login!'
    ]);
    return true;
}

include 'connectdata.php';


$arry_result=[];
$vincode=$_POST['vincode'];
$query_select= 'select * from checking_01_han where vincode="'.$vincode.'"';
$result=$conn->query($query_select);
if($result->num_rows>0){
    while($row=$result->fetch_all(MYSQLI_ASSOC)){
        $arry_result=$row;
    }
    echo json_encode(['code'=>200,'data'=>$arry_result]);
}
else{
    echo json_encode(['code'=>201,'query'=>$query_select]);
}