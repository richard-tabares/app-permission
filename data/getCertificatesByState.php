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

        // $data = json_decode(file_get_contents('php://input'), true);
        // $user = $data['idUser'];
        $selectState = $_GET['selectState'];
        if ($selectState != '') {
            $query = $mydb->prepare("SELECT * FROM certificates INNER JOIN users on certificates.idUser = users.idUser WHERE certificates.state = ?");
            $query->bind_param('s', $selectState);
        } else {
            $query = $mydb->prepare("SELECT * FROM certificates INNER JOIN users on certificates.idUser = users.idUser");
        }

        // -- $query = $mydb->prepare("SELECT * FROM certificates INNER JOIN users on certificates.idUser = users.idUser WHERE certificates.state = ?");

        if (!$query) {

            throw new Exception('400');
        }

        if (!$query->execute()) {

            throw new Exception('400');

        }

        $result = $query->get_result();

        if ($result->num_rows > 0) {

            $certificates = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($certificates);

        } else {

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