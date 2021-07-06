<?php
if(!isset($_SESSION)) session_start();
if(!isset($_POST)){
    echo json_encode([
        'code' => 401,
        'message' => 'You haven\'t permision!'
    ]);
    return true;
}
include 'connectdata.php';


$id= $_POST['err_id'];


$select=$type='';
$query_select = 'select err_id,err_user_fullname,err_time_change,err_date_change FROM history_err where err_id="'.$id.'" order by created_at asc';
$result=$conn->query($query_select);
if($result->num_rows>0){
    while($row=$result->fetch_all(MYSQLI_ASSOC)){
        $select=$row;
}

}
else{
    echo json_encode([
        'code'=>201,
        'messsage'=>'error select history_err',
        'query'=>$query_select
    ]
    );
    return false;
}
$query_select2 = 'select error_type from checking_02_han where err_id="'.$select[0]['err_id'].'"';
$result=$conn->query($query_select2);
if($result->num_rows>0){
    $row=$result->fetch_assoc();
    $type=$row['error_type'];
}
else{
    echo json_encode(['code'=>201,'message'=>'error select checking error type','query'=>$select]);
    return false;
}

echo json_encode([
    'code' => 200,
    'data' => $select,
    'type' => $type,
   
]);
return true;
?>