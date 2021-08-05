
<?php
if (!isset($_SESSION)) session_start();
date_default_timezone_set("Asia/Ho_Chi_Minh");
include '../connectdata.php';
$vincode = $_POST['vincode'];
$id = $_POST['id'];
$value = $_POST['value'];
$button = $_POST['button'];
if(is_integer($value*1)){
    $value = $value / 10;
    
}

$user_create = $_SESSION['IDuser'];
if ($button == 'create') {
    $query = 'select COUNT(ID) as count from checking_01_han where IDval="' . $id . '" and vincode="' . $vincode . '"';

    $reuslt = $conn->query($query);
    if ($reuslt->num_rows > 0) {
        $row = $reuslt->fetch_assoc();
        if ($row['count'] != 0) {
           
            $query_update = 'update checking_01_han set value="' . $value . '", user_create="' . $user_create . '" where IDval="' . $id . '" and vincode="' . $vincode . '"';
            if (mysqli_query($conn, $query_update)) {
                echo json_encode(array("statusCode" => 200, "query1" => $query, "query" => $query_update, "user_create" => $user_create, "button" => 'create'));
            } else echo json_encode(array("statusCode" => 201, "query1" => $query, "query" => $query_update));
        } else {
            $query_insert = 'insert into checking_01_han(IDval,vincode,value,user_create) values("' . $id . '","' . $vincode . '","' . $value . '","' . $user_create . '")';
          
            if (mysqli_query($conn, $query_insert)) {
                echo json_encode(array("statusCode" => 200, "query1" => $query, "query" => $query_insert, "button" => 'create'));
            } else echo json_encode(array("statusCode" => 203, "query1" => $query, "query" => $query_insert));
        }
        $query_update_time = 'update plan_vin set datetime="' . date('Y/m/d H:i:s') . '", checked="1" where vincode="' . $vincode . '"';
        if (mysqli_query($conn, $query_update_time)) {
            echo json_encode(['codeupdate' => 200]);
        } else echo json_encode(['codeupdate' => 201]);
       
    } else {
        echo json_encode([
            'code' => 210,

        ]);
    }
    $query_select_vin02 = 'select COUNT(vincode) as count from vin_02 where vincode="' . $vincode . '"';
    $reuslt = $conn->query($query_select_vin02);
    if ( $reuslt->num_rows > 0) {
        $row = $reuslt->fetch_assoc();
        if ($row['count'] > 0) {
            $query_update_vin02 = 'update vin_02 set checked="0" where vincode="' . $vincode . '"';
            if (mysqli_query($conn, $query_update_vin02)) {
                echo json_encode(['codeupdate' => 200,'query'=>$query_update_vin02]);
            } else echo json_encode(['codeupdate' => 201,'query'=>$query_update_vin02]);
        }
        else {
            $query_insert_vin02 = 'insert into vin_02 (vincode,checked) values("' . $vincode . '","0")';
            if (mysqli_query($conn, $query_insert_vin02)) {
                echo json_encode(['codeupdate' => 200,'query'=>$query_insert_vin02]);
            } else echo json_encode(['codeupdate' => 201,'query'=>$query_insert_vin02]);
        }
    }
    else echo json_encode(['codeupdate' => 201,'query'=>$reuslt,'query2'=>$query_insert_vin02]);
    
} else if ($button == 'confirm') {
    $query_confirm = 'update checking_01_han set err_level=1, user_confirm="' . $user_create . '" where IDval="' . $id . '" and vincode="' . $vincode . '"';
    if (mysqli_query($conn, $query_confirm)) {
        echo json_encode(['code' => 200, 'button' => 'confirm']);
    } else echo json_encode(['code' => 201]);
}


?>