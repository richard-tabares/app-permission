<?php
require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    
    // Configuración del servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Servidor SMTP
    $mail->SMTPAuth = true;
    $mail->Username = 'richardtabaresb@gmail.com'; // Tu correo SMTP
    $mail->Password = 'ljrvemtlhbwypctg';         // Tu contraseña SMTP
    // $mail->Password = 'ljrv emtl hbwy pctg';         // Tu contraseña SMTP
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    
    // Destinatarios
    $mail->setFrom('richardtabaresb@gmail.com', 'ADMIN');
    $mail->addAddress('richardtabaresb@gmail.com', 'Joe User'); // Añadir un destinatario
    // $mail->addAddress('ellen@example.com'); // Añadir otro destinatario
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');
    
    // Archivos adjuntos
    // $mail->addAttachment('/var/tmp/file.tar.gz'); // Añadir archivos adjuntos
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg'); // Nombre opcional
    
    // Contenido del correo
    $mail->isHTML(true); // Configurar el correo en formato HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    
    echo phpinfo();
    $mail->send();
} catch (Exception $e) {
    echo json_encode(['message' => 'el correo no se pudo enviar']) . $e;

}