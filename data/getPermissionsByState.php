<?php

require_once('./connection.php');
include('./CORS.php');

$connection = new connection();
$mydb = $connection->connectionDb();

try {
    
    if ($mydb->connect_error) {

        throw new Exception("Conexión fallida: " . $mydb->connect_error);

    }

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

        // $data = json_decode(file_get_contents('php://input'), true);
        // $user = $data['idUser'];
        $selectState = $_GET['selectState'];
        $idUser = $_GET['idUser'];
        if($selectState != ''){
            $query = $mydb->prepare("SELECT * FROM permissions INNER JOIN users on permissions.idUser = users.idUser WHERE permissions.state = ? and idBoss = ?"
        );
            $query->bind_param('si', $selectState, $idUser);
        }else{
            $query = $mydb->prepare("SELECT * FROM permissions INNER JOIN users on permissions.idUser = users.idUser WHERE idBoss = ?");
            $query->bind_param('i', $idUser);
        }

        // -- $query = $mydb->prepare("SELECT * FROM permissions INNER JOIN users on permissions.idUser = users.idUser WHERE permissions.state = ?");

        if(!$query){

            throw new Exception('400');
        }

        if(!$query->execute()){

            throw new Exception('400');

        }

        $result = $query->get_result();

        if($result->num_rows > 0){

            $permissions = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($permissions);

        }else{

            throw new Exception('204');
            
        }

    } else {

        throw new Exception('400');

    }

} catch (Exception $error) {

    echo json_encode(['message' => $error->getMessage()]);

} finally {

    if (isset($query) && $query instanceof mysqli_stmt) {

        $query->close();

    }
    if (isset($mydb) && $mydb instanceof mysqli) {

        $mydb->close();

    }
}

?>