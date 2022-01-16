<?php
require 'PhpMailFiles/PHPMailerAutoload.php';
if(isset($_POST["email"]) && $_POST["email"] != ''){
    if(filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $message = $_POST["message"];

        $admin = "prateekv2003@gmail.com";
        $subject = "Enquiry from PORTFOLIO WEB!";
        $body = "";

        $body = "<br/>"."Name: ".$name."<br/>"."Email: ".$email."<br/>"."Phone: ".$phone."<br/>"."Message: ".$message;
        if (isset($_POST["check-box"])) {
            $subject = "I wand to work with you!"; //replacing subject if check-box clicked.
        }

        //MAILER......

        $mail = new PHPMailer;

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'prateekv2003@gmail.com';
        $mail->Password = 'jihhvdazfheoiivf';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->AddReplyTo($email);
        $mail->From = $admin;
        $mail->FromName = $name;
        $mail->addAddress($admin, 'Prateek Vishwakarma');
        
        $mail->isHTML(true);

        $mail->Subject = $subject ;
        $mail->Body = $body ;
        $mail->AltBody = 'Mail is not responding or non-HTML mail client';
        
        if (!$mail->send()) {
            $response = array("success" => false, "message" => "Mail could not be sent!\nSomething went wrong.");
            echo json_encode($response);
        } else {
            $response = array("success" => true, "message" => "Mail sent successfully!");
            echo json_encode($response);
        }
    } else {
        $response = array("success" => false, "message" => "Not a valid email.");
        echo json_encode($response);
    }
}

?>