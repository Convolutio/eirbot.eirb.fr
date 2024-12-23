<?php 
if(isset($_POST['submit'])){
    $to = "example@email.org"; // this is the email address of the organization
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $name . " a écrit : " . "\n\n" . $_POST['content'];
    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
}
?>
