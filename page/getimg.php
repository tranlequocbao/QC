<?php
session_start();
include '../connectdata.php';

$vincode = $_POST['vincode'];
$car_code = substr($vincode, 0, 9);
$type = '';
$query = 'select * from car_code where car_code="' . $car_code . '"';

$reuslt = $conn->query($query);
if ($reuslt->num_rows > 0) {
    $row = $reuslt->fetch_assoc();
    $type = $row['car_folder'];
} else {
    echo json_encode([
        'code' => 210
    ]);
}

function recursiveSearch($folder, $pattern)
{
    $dir = new RecursiveDirectoryIterator($folder);
    $ite = new RecursiveIteratorIterator($dir);
    $files = new RegexIterator($ite, $pattern, RegexIterator::GET_MATCH);
    $fileList = array();
    foreach ($files as $file) {
        if (!is_null($file[0])) {
            $exp = explode('\\', $file[0]);
            $fileList[] = array(
                'image' => end($exp)
            );
        }
    }
    return $fileList;
}
if (isset($_SESSION['Position']))
    $folder = $_SESSION['Position'];
$img_arry = [];
if (isset($_SESSION['Shop']))
    $shop = $_SESSION['Shop'];
$img_arry = recursiveSearch("./assets/img/" . $type . "/" . $shop . '/station02/' . $folder, "/^.*\.(jpg|jpeg|png)$/");

echo json_encode([
    'code' => 200,
    'type' => $type,
    'shop' => $shop,
    'folder' => $folder,
    'img' => $img_arry,
    'path' => "../assets/img/" . $type . "/" . $shop . '/station02/' . $folder,
]);
mysqli_close($conn);
