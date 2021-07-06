<?php
if (!isset($_SESSION)) session_start();
include '../connectdata.php';
$type = $_POST['type'];
$error = $_POST['error'];
$error_code = $_POST['error_code'];

if ($type == 'edit') {
    $error_toadoX = $error['toadoX'];
    $error_toadoY = $error['toadoY'];
    $error_type = $error['type_error'];
    $err_other = $error['err_other']??'';
     
    $querry_update = 'update checking_02_han set error_type="' . $error_type . '", error_note="' . $err_other . '" where vincode="' . $error_code . '" and error_x="' . $error_toadoX . '" and error_y="' . $error_toadoY . '"';
    if (mysqli_query($conn, $querry_update)) {
        echo json_encode((["code" => 200, "message" => 'update susscess']));
        return true;
    } else {
        echo json_encode(["code" => 201, "message" => 'update failed']);
        return true;
    }
}

if ($type == 'delete') {
    $error_toadoX = $error['toadoX'];
    $error_toadoY = $error['toadoY'];

    $query_delete='delete from checking_02_han where vincode="' . $error_code . '" and error_x="' . $error_toadoX . '" and error_y="' . $error_toadoY . '"';

    if (mysqli_query($conn, $query_delete)) {
        echo json_encode((["code" => 200, "message" => 'delete susscess',"query"=>$query_delete]));
        return true;
    } 
    else {
        echo json_encode(["code" => 201, "message" => 'delete failed']);
        return true;
    }
    
}

if (gettype($error) != 'array') {
    $error_toadoX = $error['toadoX'];
    $error_toadoY = $error['toadoY'];
    $error_type = $error['type_error'];
    $error_position = $error['error_position'];
    $err_other = $error['err_other'];
    echo json_encode(['code' => "ok"]);
    $query_insert = 'INSERT INTO `checking_02_han`( `vincode`, `error_type`, `error_position`, `error_x`, `error_y`, `error_user`, `user_name`, `user_code`, `error_note`, `note`) ' +
        'VALUES ("' . $error_code . '","' . $error_type . '","' . $error_position . '","' . $error_toadoX . '","' . $error_toadoY . '","' . $_SESSION['Position'] . '","' . $_SESSION['Name'] . '","' . $_SESSION['IDuser'] . '","' . $err_other . '","")';
    if (mysqli_query($conn, $query_insert)) {
        echo json_encode(array("statusCode" => 200, "query" => $query_insert));
        $insert =  mysqli_insert_id($conn);
    } else echo json_encode(array("statusCode" => 203, "query" => $query_insert));

    $query = 'select id from checking_02_han where vincode="' . $vincode . '"';

    $reuslt = $conn->query($query);
    if ($reuslt->num_rows > 0) {
        $row = $reuslt->fetch_assoc();
        echo json_encode([
            'code' => 200,
            'color' => $row['color'],
            'type' => $row['type']
        ]);
    } else {
        echo json_encode([
            'code' => 210
        ]);
    }
    $err_id = "ERR_MV_" . $insert;
    $query_update = 'update checking_02_han set err_id="' . $err_id . '" where id="' . $insert . '"';
    if (mysqli_query($conn, $query_update)) {
        echo json_encode(array("statusCode" => 200, "query" => $query_update));
        $insert =  mysqli_insert_id($conn);
    } else echo json_encode(array("statusCode" => 203, "query" => $query_update));
    $query_insert = 'INSERT INTO `checking_02_han`( `vincode`, `error_type`, `error_position`, `error_x`, `error_y`, `error_user`, `user_name`, `user_code`, `error_note`, `note`) ' +
       'VALUES ("' . $error_code . '","' . $error_type . '","' . $error_position . '","' . $error_toadoX . '","' . $error_toadoY . '","' . $_SESSION['Position'] . '","' . $_SESSION['Name'] . '","' . $_SESSION['IDuser'] . '","' . $err_other . '","")';
    echo json_encode(['code'=>$query_insert]);

    return true;
}

$error_sum = 0;
$iss = [];


foreach ($error as $item => $value) {
    $error_toadoX = $value['toadoX'];
    $error_toadoY = $value['toadoY'];
    $error_type = $value['type_error'];
    $error_position = $value['error_position'];
    $err_other = $value['err_other'];

    $query_insert = 'insert into checking_02_han( vincode, error_type, error_position, error_x, error_y, error_user, user_name, user_code, error_note, note) values ("' . $error_code . '","' . $error_type . '","' . $error_position . '","' . $error_toadoX . '","' . $error_toadoY . '","' . $_SESSION['Position'] . '","' . $_SESSION['Name'] . '","' . $_SESSION['IDuser'] . '","' . $err_other . '","")';
    if (mysqli_query($conn, $query_insert)) {
        echo json_encode(array("statusCode" => 200, "query" => $query_insert));
        $insert =  mysqli_insert_id($conn);
    } else echo json_encode(array("statusCode" => 203, "query" => $query_insert));
    if (!$insert) {
        $error_sum++;
    }
    array_push($iss, $insert);
}

if ($error_sum != 0) {
    echo json_encode([
        'code' => 202,
        'message' => "SQL FAIL",
        'error' => $error_sum
    ]);
    return true;
}

$err_update = false;
$err_insert_history = false;
foreach ($iss as $item => $value) {
    $err_id = "ERR_MV_" . $value;
    $query_update = 'update checking_02_han set err_id="' . $err_id . '" where id="' . $value . '"';
    if (mysqli_query($conn, $query_update)) {
        echo json_encode(array("statusCode" => 200));
    } else {
        $err_update = true;
        break;
    }
    $hour = date("H:m:s");
    $date = date("d-m-Y");
    $query_insert_history = 'insert into history_err( err_code, err_id, err_user_code, err_user_fullname, err_user_change, err_time_change, err_date_change)  values("' . $error_code . '","' . $err_id . '","' . $_SESSION['IDuser'] . '","' . $_SESSION['Name'] . '","' . $_SESSION['Position'] . '","' . $hour . '","' . $date . '")';
    if (mysqli_query($conn, $query_insert_history)) {
        echo json_encode(array("statusCode" => 200));
    } else {
        $err_insert_history = true;
        break;
    }
}
if ($err_update) {
    echo json_encode([
        'code' => 202,
        'message' => "SQL FAIL",
        'error' => "Error update error_id"
    ]);
    return true;
}
if ($err_insert_history) {
    echo json_encode([
        'code' => 202,
        'message' => "SQL FAIL",
        'error' => "Error insert history error"
    ]);
    return true;
}

echo json_encode([
    'code' => 200,
    'message' => "Insert success",
    'error' => $error_sum,
    'data' => $iss ?? ''
]);
return true;
//echo json_encode(['code' => $query_insert]);
