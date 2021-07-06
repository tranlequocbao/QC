<?php

if(!isset($_SESSION)) session_start();


$car_code=$_POST['vincode'];
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
$img_arry=recursiveSearch("../page/assets/img/".$car_code."/Body/station01/","/^.*\.(jpg|jpeg|png)$/");
echo json_encode(['code'=>200,'image'=>$img_arry]);