
<?php
 

 include '../connectdata.php';
    $vincode=$_POST['vincode'];
    
    
        $query='select idval from checking_01_han where vincode="'.$vincode.'"';
        $i=0;$j=0;
        $arrayid=[]; $arrayvalue=[];
        $reuslt_id=$conn->query($query);
        if($reuslt_id->num_rows>0){
            while($row=$reuslt_id->fetch_assoc()){
                $arrayid[$i]=$row['idval'];
                $query_value='select value,err_level from checking_01_han where vincode="'.$vincode.'" and idval="'.$row['idval'].'"';
                $reuslt_value=$conn->query($query_value);
                
                if($reuslt_value->num_rows>0){
                    while($row_value=$reuslt_value->fetch_assoc()){
                        $arrayvalue[$j]=$row_value['value'];
                        $arraylevel[$j]=$row_value['err_level'];
                        $j++;
                    }
                }$i++;
            }
            echo json_encode([
                'code'=>200,
                'id'=>$arrayid,
                'value'=>$arrayvalue,
                'level'=>$arraylevel
            ]);
              
        }
        else{
            echo json_encode([
                'code'=>210
            ]);
        }
    
    mysqli_close($conn);
?>