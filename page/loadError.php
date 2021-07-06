<?php

if (!isset($_SESSION)) session_start();
include '../connectdata.php';


$code = $_POST['code'] ?? '';

if ($code == '') {
    echo json_encode([
        'code' => 205,
        'message' => 'Please request code!'
    ]);
    return true;
}



// if ($_SESSION['logined']['position'] != 'ADMIN') {
//     $errUser = $_POST['sealer'] == 'true' ? "SEALER" : $_SESSION['logined']['username'];
//     array_push($get, ['error_user', $errUser]);
// }
$_result=[];
$query_select ='select * from checking_02_han where vincode="'.$code.'"';
$result = $conn->query($query_select);
if($result->num_rows>0){
    while($row=$result->fetch_all(MYSQLI_ASSOC)){
        $_result=$row;
    };
}
else $row=[];
// $result = $db->get($get) ?? [];

 $color = 'Not found';
$type='Not found';
$query_select_color='select color,type from plan_vin where vincode="'.$code.'"';
$result=$conn->query($query_select_color);
if($result->num_rows>0){
    $row=$result->fetch_assoc();
    $color=$row['color'];
    $type=$row['type'];
}

echo json_encode([
    'code' => 200,
    'message' => 'success',
    'data' => $_result,
    'color' => $color,
    'type'=>$type
    // 'hasSealerError' => count($getSealerError)
]);
return true;
