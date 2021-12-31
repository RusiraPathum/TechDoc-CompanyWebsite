<?php

if ($_POST["id"] == "contact"){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $category = $_POST['category'];

    $to = "secraterywththala@gmail.com";
    $mailSubject =  "Secretary Divisions Account Created..";

    $emailBody = "Your <b>Username :</b> $email <br>";
    $emailBody .= "Your <b>Password :</b> $category <br>Thank You !";

    $header = "From:$email\r\nContent-Type: text/html;";

    $sen = mail($to, $mailSubject, $emailBody, $header);

    if ($sen){
        echo "1";
    }else{
        echo "2";
    }

}