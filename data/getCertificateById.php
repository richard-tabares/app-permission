<?php

require_once('./connection.php');
include('./CORS.php');

$connection = new connection();
$mydb = $connection->connectionDb();

try {

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

        $data = json_decode(file_get_contents('php://input'), true);
        $idCertificate = $data['idCertificate'];

        $query = $mydb->prepare("SELECT * FROM certificates WHERE idCertificate = ?");

        if(!$query){

            throw new Exception('400');
        }

        $query->bind_param('i', $idCertificate);

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

}

?>