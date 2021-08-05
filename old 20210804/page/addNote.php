<?php
if (!isset($_SESSION)) session_start();
include '../connectdata.php';



$car_code = $_POST['car_code'] ?? '';
$note_car = $_POST['note_car'] ?? '';
if (isset($_POST['loadNote']) && $_POST['loadNote'] == '1') {
    echo json_encode([
        'code' => 200,
        'note' => $getNote['note'] ?? ''
    ]);
    return true;
}
if ($car_code == '') {
    echo json_encode([
        'code' => 205,
        'message' => 'Car code or Note car empty!'
    ]);
    return true;
}

$query_select = 'select note from note_car where vin_code="' . $car_code . '"';
$result = $conn->query($query_select);
if ($result->num_rows > 0) {
    $getNote = $result->fetch_assoc();
}

if (!empty($getNote)) {
    $query_update = 'update note_car set note="' . $note_car . '" where vin_code="' . $car_code . '"';
    if (!mysqli_query($conn, $query_update)) {

        echo json_encode([
            'code' => 203,
            'message' => 'Update note error!'
        ]);
        return true;
    }

    echo json_encode([
        'code' => 200,
        'message' => 'Update note success!'
    ]);
    return true;
}


$query_insert = 'insert into note_car(vin_code,username_add,note) values("' . $car_code . '","' . $_SESSION['IDuser'] . '","' . $note_car . '")';
if (!mysqli_query($conn, $query_insert)) {
    echo json_encode([
        'code' => 203,
        'message' => 'Insert note error!'
    ]);
    return true;
}


echo json_encode([
    'code' => 200,
    'message' => 'Insert note success!'
]);
return true;
