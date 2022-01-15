<?php
// echo "Hello World!";
// print_r($_POST);
$success = FALSE;
if(isset($_POST["email"]) && $_POST["email"] != ''){
    if(filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $message = $_POST["message"];

        $to = "prateekv2003@gmail.com";
        $subject = "Mail from PORTFOLIO WEB!";
        $body = "";

        $body = "\nName: ".$name."\n"."Email: ".$email."\n"."Phone: ".$phone."\n"."Message: ".$message;
        $success = TRUE;
        mail($to, $subject, $body, 'From: '.$email);
    }
}
if ($success) {
    echo "Mail Submitted!";
} else {
    echo "An error occured!";
}


?>