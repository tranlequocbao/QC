
<?php
 

 include '../connectdata.php';
    $vincode=$_POST['vincode'];
    
        $query='select color,type from plan_vin where vincode="'.$vincode.'"';
   
        $reuslt=$conn->query($query);
        if($reuslt->num_rows>0){
            $row=$reuslt->fetch_assoc();
            echo json_encode([
                'code'=>200,
                'color'=>$row['color'],
                'type'=>$row['type'],
                'query'=>$query
            ]);
        }
        else{
            echo json_encode([
                'code'=>210
            ]);
        }
    
    mysqli_close($conn);
?>