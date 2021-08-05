<?php 
$severname='localhost';
$username='root';
$password='';
$db='qc_han';
    $conn=mysqli_connect($severname,$username,$password,$db);
    $query='select * from username where Shop="BODY"';
    $result=$conn->query($query);
    if($result->num_rows>0){
        while($row=$result->fetch_assoc()){
            $station=$row['station']=='1'?'Có':'Không';
?>
              <tr class=<?=$row['IDuser'];?> data-id=<?=$row['IDuser'];?>>
                <td><?=$row['IDuser'];?></td>
                <td><?=$row['Name'];?></td>
                <td><?=$row['Dept'];?></td>
                <td><?=$row['Type'];?></td>
                <td><?=$row['Position'];?></td>
                <td><?=$station;?></td>
                <td><button class="btn btn-danger delButton">XÓA</button></td>
                <td><button class="btn btn-primary modifButton">SỬA</button></td>
            </tr>
<?php

            
        }
    }
else{
    echo "Khong co du lieu";


}
mysqli_close($conn);
?>