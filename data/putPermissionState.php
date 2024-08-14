<?php

require_once './connection.php';
include './CORS.php';

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

$connection = new connection();
$mydb = $connection->connectionDb();

try {

    if ($mydb->connect_error) {

        throw new Exception("Conexión fallida: " . $mydb->connect_error);

    }

    if ($_SERVER['REQUEST_METHOD'] === 'PUT') {

        // $json = file_get_contents('php://input');
        // $data = json_decode($json, true);

        $idPermission = $_GET['idPermission'];
        $buttonState = $_GET['buttonState'];

        $query = $mydb->prepare("UPDATE permissions SET state = ? WHERE idPermission = ?");

        if (!$query) {

            throw new Exception('400');
        }

        $query->bind_param('si', $buttonState, $idPermission);

        if (!$query->execute()) {

            throw new Exception('400');
        }

        if ($query->affected_rows > 0) {

            //consultamos el permiso para enviar al notificacion a mail
            $query = $mydb->prepare(
                "SELECT 
                    p.idPermission AS idPermission,
                    p.idUser,
                    (SELECT u.name FROM users AS u WHERE u.idUser = p.idUser) AS userName,
                    (SELECT u.email FROM users AS u WHERE u.idUser = p.idUser) AS userMail,
                    p.idBoss AS idBoss,
                    p.date AS date,
                    p.description AS description,
                    p.pdfPath AS pdfPath,
                    p.state AS state 
                    FROM permissions AS p 
                    WHERE idPermission = ?"
            );

            if (!$query) {

                throw new Exception('400');
            }

            $query->bind_param('i', $idPermission);

            if (!$query->execute()) {

                throw new Exception('400');

            }

            $result = $query->get_result();
            $data = $result->fetch_assoc();

            $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
            $domain = $_SERVER['HTTP_HOST'];
            $path = $data['pdfPath'];
            $attach = "$protocol://$domain/$path";

            $message = "<h1>Respuesta Permiso Laboral</h1>";
            $message .= "<p>Estimado/a" . $data['userName'] . ",</p>";
            $message .= "<p>Espero que te encuentres bien.</p><br>";
            $message .= "<p>He recibido tu notificación sobre el permiso laboral solicitado. Te agradezco por informarnos con antelación.</p>";
            $message .= "<p>Tu solicitud ha sido <b>" . $data['state'] . "</b>. Si surge alguna situación que requiera tu atención o si necesitas hacer ajustes en los detalles del permiso, por favor, no dudes en ponerte en contacto conmigo.</p><br><br>";
            $message .= "<p>Aca puedesde descargar el archivo con la respuesta <a href='$attach'></a></p>";


            try {

                // Configuración del servidor SMTP
                $mail->isSMTP();
                $mail->Host = 'smtp.gmail.com'; // Servidor SMTP
                $mail->SMTPAuth = true;
                $mail->Username = 'richardtabaresb@gmail.com'; // Tu correo SMTP
                $mail->Password = 'ljrvemtlhbwypctg';         // Tu contraseña SMTP
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->Port = 587;

                // Destinatarios
                $mail->setFrom('richardtabaresb@gmail.com', 'Notificación Permiso Laboral');
                $mail->addAddress('richardtabaresb@gmail.com', 'Joe User'); // Añadir un destinatario

                // Archivos adjuntos
                $mail->addAttachment($data['pdfPath']); // Añadir archivos adjuntos
                // $mail->addAttachment('/tmp/image.jpg', 'new.jpg'); // Nombre opcional

                // Contenido del correo
                $mail->isHTML(true); // Configurar el correo en formato HTML
                $mail->Subject = 'Notificacion de Permiso Laboral';
                $mail->Body = $message;
                // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

                $mail->send();

            } catch (Exception $e) {

                echo json_encode(['message' => 'el correo no se pudo enviar']);

            }



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