<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'smkatale@gmail.com';

$email_body = "User Name: $name.\n".
				"User Email: $visitor_email.\n".
					"Use Message: $message.\n";

$to = "smkatale@gmail.com";

$headers = "From: $email_from\r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to, $subject, $email_body, $headers);0

header("Location: index.html");

?>