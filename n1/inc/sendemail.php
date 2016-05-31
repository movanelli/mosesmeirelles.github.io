<?php

// Define some constants
define( "RECIPIENT_NAME", "John Doe" );
define( "RECIPIENT_EMAIL", "mail@mail.com" );

// Read the form values
$success = false;
$fname = isset( $_POST['fname'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['fname'] ) : "";
$lname = isset( $_POST['lname'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['lname'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$phone = isset( $_POST['phone'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['phone'] ) : "";
$category = isset( $_POST['category'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['category'] ) : "";
$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";

$mail_subject = 'A contact request send by ' . $fname. $lname;

$body = 'Name: '. $fname . $lname . "\r\n";
$body .= 'Email: '. $senderEmail . "\r\n";
$body .= 'Phone: '. $phone . "\r\n";
$body .= 'Category: '. $category . "\r\n";
$body .= 'Message: ' . "\r\n" . $message;



// If all values exist, send the email
if ( $fname && $senderEmail && $message ) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $fname . $lname . " <" . $senderEmail . ">";  
  $success = mail( $recipient, $mail_subject, $body, $headers );
  echo "<p class='success'>Thanks for contacting us. We will contact you ASAP!</p>";
}

?>