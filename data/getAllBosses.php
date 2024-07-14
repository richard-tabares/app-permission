<?php

require_once './connection.php';
include './CORS.php';

$connection = new connection();
$mydb = $connection->connectionDb();

try {

    if ($mydb->connect_error) {

        throw new Exception("Conexión fallida: " . $mydb->connect_error);

    }

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

        // $data = json_decode(file_get_contents('php://input'), true);
        // $idUSer = $data['idUser'];
        // $idUser = $_GET['idUser'];
        // $password = $_GET['password'];

        $role = 'jefe';

        $query = $mydb->prepare("SELECT * FROM users WHERE role = ?");
        $query->bind_param('s', $role);

        if (!$query) {

            throw new Exception('400');
        }


        if (!$query->execute()) {

            throw new Exception('400');

        }

        $result = $query->get_result();

        if ($result->num_rows > 0) {

            $permissions = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($permissions);

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