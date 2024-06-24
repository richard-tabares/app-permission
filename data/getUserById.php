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

        $data = json_decode(file_get_contents('php://input'), true);
        $idUSer = $data['idUser'];

        $query = $mydb->prepare("SELECT * FROM users WHERE idUser = ?");

        if(!$query){

            throw new Exception('400');
        }

        $query->bind_param('i', $idUSer);

        if(!$query->execute()){

            throw new Exception('400');

        }

        $result = $query->get_result();

        if($result->num_rows > 0){

            $users = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($users);

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