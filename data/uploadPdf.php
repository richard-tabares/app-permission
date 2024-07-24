<?php

require_once './connection.php';
include './CORS.php';

$connection = new connection();
$mydb = $connection->connectionDb();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $idPermission = $_POST['id'];
        $uploadDir = 'uploadPermissions/';
        $uploadFile = $uploadDir . basename($_FILES['file']['name']);
        $path = 'data/' . $uploadFile;

        // Verifica si la carpeta de uploads existe, si no, la crea
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile)) {
            echo json_encode(['response' => 'upload_ok']);

            //aca mandamos el correo y actualizamos el campo pdfPath con la ruta del pdf creado
            $query = $mydb->prepare('UPDATE permissions SET pdfPath = ? WHERE idPermission = ?');
            $query->bind_param('si', $path, $idPermission );
            $query->execute();


        } else {
            echo json_encode(['response' => "upload_not_ok"]);
        }
    } else {
        echo json_encode(['response' => "upload_not_ok"]);
    }
} else {
    echo json_encode(['response' => "upload_not_ok"]);
}
?>