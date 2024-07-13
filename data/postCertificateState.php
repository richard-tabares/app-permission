<?php

require_once ('./connection.php');
include ('./CORS.php');

$connection = new connection();
$mydb = $connection->connectionDb();

try {

    if ($mydb->connect_error) {

        throw new Exception("Conexión fallida: " . $mydb->connect_error);

    }

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

        // $json = file_get_contents('php://input');
        // $data = json_decode($json, true);

        $idCertificate = $_GET['idCertificate'];
        $buttonState = $_GET['buttonState'];

        $query = $mydb->prepare("UPDATE certificates SET state = ? WHERE idCertificate = ?");

        if (!$query) {

            throw new Exception('400');
        }

        $query->bind_param('si', $buttonState, $idCertificate );

        if (!$query->execute()) {

            throw new Exception('400');
        }

        if ($query->affected_rows > 0) {

            echo json_encode(['message' => '200']);

        } else {

            echo json_encode(['message' => '204']);

        }

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