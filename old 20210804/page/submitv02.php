<?php
if(!isset($_SESSION)) session_start();
include '../connectdata.php';
$vincode=$_POST['vincode'];

$query_update_vin02='update vin_02 set checked="1" where vincode="'.$vincode.'"';
if(mysqli_query($conn,$query_update_vin02)){
    echo json_encode(['codeupdate'=>200]);
}                                       
else echo json_encode(['codeupdate'=>201, 'query'=>$query_update_vin02]);

$query_select_vin03='select COUNT(vincode) as count from vin_03 where vincode="'.$vincode.'"';
$reuslt=$conn->query($query_select_vin03);
if($reuslt->num_rows>0){
    $row=$reuslt->fetch_assoc();
    if($row['count']>0){
        $query_update_vin03 ='update  vin_03 set checked="0" where vincode="'.$vincode.'"';
        if(mysqli_query($conn,$query_update_vin03)){
            echo json_encode(['codeupdate'=>200]);
        }                                       
        else echo json_encode(['codeupdate'=>201]);
    }
    else{
        $query_insert_vin03 ='insert into vin_03 (vincode,checked) values("'.$vincode.'","0")';
        if(mysqli_query($conn,$query_insert_vin03)){
            echo json_encode(['codeupdate'=>200]);
        }                                       
        else echo json_encode(['codeupdate'=>201]);
    }
}