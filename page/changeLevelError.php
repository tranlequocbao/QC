<?php

use ConvertApi\Result;

if (!isset($_SESSION)) session_start();

include '../connectdata.php';


$err_id = $_POST['id'] ?? '';
$level = $_POST['level'] ?? '';
$arrError = $_POST['arrError'] ?? '';
$arr_res = [];
$sealer = $_POST['sealer'] ?? false;
$err_note = $_POST['noteError'] ?? '';
$err_code = $_POST['err_code'] ?? '';
$povilish = $_POST['polish'] ?? '';
$usercode = $_POST['usercode'] ?? '';
$i = 0;
$isUserCheckV2 = isset($_SESSION['Station']) && ($_SESSION['Station']) == 'Trạm 4';

if ($err_id == '' || $level == '') {
    echo json_encode([
        'code' => 401,
        'type' => 'error',
        'res' => 'Not found id and level!'
    ]);
    return true;
}



$table = 'checking_02_han';
$table_history = 'history_err';
if ($sealer == 'true') {
    $table = 'sealer_checking';
    $table_history = 'history_err_sealer';
}
$usercode = $_SESSION['IDuser'];

if ($arrError != '' && $arrError != '0') {

    $query_insert = 'insert into car_qc1k_submit(fullname,usercode,username,car_code,povilish)  values("' . $_SESSION['Name'] . '","' . $usercode . '","' . $_SESSION['Station'] . '","' . $err_code . '","' . $povilish . '")';
    if (!mysqli_query($conn, $query_insert)) {
        echo json_encode(['code' => 204, 'type' => 'error', 'res' => 'Error insert submit car', 'query' => $query_insert]);
        return true;
    }

    $result = [];
    $update = $insert = [];
    $j = 0;
    foreach ($arrError as $item => $value) {
        $err_id = $value['err_id'];
        $aryUpdate = [
            'err_level' => $level,
            'err_note' => $err_note
        ];

        $usercode = $value['usercode'] != '' ? $value['usercode'] : $_SESSION['IDuser'];

        // if (!queryChangeLevelError($err_code,$aryUpdate,$err_id,$arr_res,$table,$table_history,$usercode)) {
        //     echo json_encode([
        //         'code' => 204,
        //         'type' => 'error',
        //         'res' => $arr_res,
        //         'cuz'=>'khongbiet'
        //     ]);
        //     return true;
        // }

        queryChangeLevelError($err_code, $aryUpdate, $err_id, $arr_res, $table, $table_history, $usercode);
        // array_push($result,$value);
        // $j++;
    }

    echo json_encode(['code' => $result, 'i' => $i, 'j' => $j, 'update' => $update, 'insert' => $insert]);
    return true;
    if ($isUserCheckV2) {
        if (updateToCarSubmitRepairV2($db, $err_code)['status'] != 1) {
            echo json_encode([
                'code' => 201,
                'type' => 'Warning: updateToCarSubmitRepairV2 error!',
                'res' => $arr_res[0]
            ]);
            return true;
        }
    }
    echo json_encode([
        'code' => 200,
        'type' => 'success 1',
        'res' => $arr_res[0]
    ]);
    return true;
}
$query_insert = 'insert into car_qc1k_submit(fullname,usercode,username,car_code,povilish)  values("' . $_SESSION['Name'] . '","' . $usercode . '","' . $_SESSION['Station'] . '","' . $err_code . '","' . $povilish . '")';
if (!mysqli_query($conn, $query_insert)) {
    echo json_encode(['code' => 204, 'type' => 'error', 'res' => 'Error insert submit car', 'query' => $query_insert]);
    return true;
}
$usercode = $_POST['usercode'] ?? $_SESSION['IDuser'];

queryChangeLevelError($level, $err_code, $err_note, $err_id, $arr_res, $table, $table_history, $usercode, $conn);
if ($isUserCheckV2) {
    if (updateToCarSubmitRepairV2($err_code)['status'] != 1) {
        echo json_encode([
            'code' => 201,
            'type' => 'Warning: updateToCarSubmitRepairV2 error!',
            'res' => $arr_res[0],
            'status'=>updateToCarSubmitRepairV2($err_code)['status'],
            'ms' => updateToCarSubmitRepairV2($err_code)['count'],
            'message' => updateToCarSubmitRepairV2($err_code)['message']
        ]);
        return true;
    }
}
echo json_encode([
    'code' => 200,
    'type' => 'success 2',
    'res' => $arr_res[0]
]);
return true;
function queryChangeLevelError($err_code, $aryUpdate, $err_id, &$arr_res, $table, $table_history, $usercode = null)
{

    $level = $aryUpdate['err_level'];
    $err_note = $aryUpdate['err_note'];
    global $update, $insert, $conn;
    $query_update = 'update ' . $table . ' set err_level="' . $level . '", error_note="' . $err_note . '" where err_id="' . $err_id . '"';
    array_push($update, $query_update);
    if (!mysqli_query($conn, $query_update)) {
        array_push($arr_res, [
            'code' => 208,
            'message' => 'Update level fail',
            'sql' => $query_update
        ]);
        return false;
    }
    $err_code = $err_code ?? '';
    $query_insert = 'insert into ' . $table_history . ' (err_code,err_id,err_user_change,err_user_code,err_user_fullname,err_level,err_time_change,err_date_change) values("' . $err_code . '","' . $err_id . '","' . $_SESSION['Position'] . '","' . $usercode . '","' . $_SESSION['Name'] . '","' . $level . '","' . date('H:m:s') . '","' . date('d-m-Y') . '")';
    array_push($insert, $query_insert);
    if (!mysqli_query($conn, $query_insert)) {
        array_push($arr_res, [
            'code' => 200,
            'message' => 'Success',
            'note' => $aryUpdate['err_note'] ?? '',
            'query' => $query_insert
        ]);
        return true;
    }
    global $i;
    $i++;
}

function updateToCarSubmitRepairV2($vincode)
{

    global $conn;
    $query_select = 'select COUNT(car_code) as count from car_submit_by_repair_v2 where car_code="' . $vincode . '"';
    $result = $conn->query($query_select);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $count =(int)$row['count'];
        $type=gettype($count);
        if ($count >= 1) {
           
            $count=(int)$row['count']+1;
            $query_update = 'update car_submit_by_repair_v2 set count_submit=' . $count . ', finished=0 where car_code="' . $vincode . '"';
            if (mysqli_query($conn, $query_update)) {
                return [
                    'status' => 1,
                    'message' => 'Done',
                    'count' => $query_update
                ];
            }
        } else {
            
            $query_insert = 'insert into car_submit_by_repair_v2(car_code,user_submit_code,user_submit_name) values("'.$vincode.'","' . $_SESSION['IDuser'] . '","' . $_SESSION['Name'] . '")';
            if (mysqli_query($conn, $query_insert)) {
                return [
                    'status' => 1,
                    'message' => 'Done',
                    'count'=>$query_insert
                ];
            }
        }
    } else {
          return [
        'status' => 2,
        'message' => 'car_submit_by_repair_v2 false',
        'count'=>2
    ];
    }

  



}
