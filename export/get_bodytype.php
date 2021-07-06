
<?php
 

 include 'connectdata.php';
    $bodytye=$_POST['bodytype'];
        $type='';
        $query='select * from car_code where car_code="'.$bodytye.'"';
   
        $reuslt=$conn->query($query);
        if($reuslt->num_rows>0){
            $row=$reuslt->fetch_assoc();
            $type=$row['car_folder'];
            echo json_encode([
                'code'=>200,
                'type'=>$row['car_folder']
            ]);
        }
        else{
            echo json_encode([
                'code'=>210,'query'=>$query
            ]);
        }
    
    mysqli_close($conn);
?>