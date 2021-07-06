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


$type = $_POST['type'];
$code = $_POST['code'];
$code_min = $_POST['code_min'];
$folder='';
$error='';

if ($type == 'loadall') {
    //load folder
     $query_select = 'select car_folder from car_code where car_code="'.$code_min.'"';
     $reuslt=$conn->query($query_select);
     if($reuslt->num_rows>0){
         $row=$reuslt->fetch_assoc();
         $folder = $row['car_folder'];
    }
    


    if (!$folder) {
        echo json_encode([
            'code' => 203,
            'message' => 'Not found car code!'
        ]);
        return true;
    }
    //load error
    $query_select_error = 'select * from checking_02_han where vincode="' . $code . '"';
    $result = $conn->query($query_select_error);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_all(MYSQLI_ASSOC)) {
            $error = $row;
        }
    }
    if (!$error) {
        $error = [];
    }
    //load img
    function recursiveSearch($folder, $pattern) {
        $dir = new RecursiveDirectoryIterator($folder);
        $ite = new RecursiveIteratorIterator($dir);
        $files = new RegexIterator($ite, $pattern, RegexIterator::GET_MATCH);
        $fileList = array();
        foreach($files as $file) {
            $fileList[] = array(
                'image' => str_replace('\\','/' ,$file[0])
            );
        }
        return $fileList;
    }
    if (isset($_SESSION['Position']))
        $station = $_SESSION['Position'];
    $img_arry = $img_arryLH=$img_arryRH=[];
    if (isset($_SESSION['Shop']))
        $shop = $_SESSION['Shop'];
        if($station!='ALL'){
          
            $img_arry = recursiveSearch("./assets/img/" . $folder . "/" . $shop . '/station02/' . $station, "/^.*\.(jpg|jpeg|png)$/");
        }
        
            
        else{
            $img_arryLH=recursiveSearch("./assets/img/" . $folder . "/" . $shop . '/station02/LH' , "/^.*\.(jpg|jpeg|png)$/");
            $img_arryRH=recursiveSearch("./assets/img/" . $folder . "/" . $shop . '/station02/RH' , "/^.*\.(jpg|jpeg|png)$/");
        }


    echo json_encode([
        'code'          => 200,
        'error'         => $error,
        'image'      => $img_arry,
        'image_rh'=>$img_arryRH,
        'image_lh'=>$img_arryLH,
        'position'=>$station
    ]);
    return true;
}
