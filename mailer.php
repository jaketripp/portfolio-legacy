<?php
$myemail = "jake@jaketripp.com";

$name = check_input($_POST['name'], "Enter your name");
$company = check_input($_POST['company'], "Enter your company");
$email = check_input($_POST['email']);
$phone = check_input($_POST['phone'], "Enter a phone number");
$message = check_input($_POST['message'], "Write your message");

$subject = "Web Dev Lead -- jaketripp.com";
$header = "From: portfolio_form@jaketripp.com";

$message = "

NAME: $name
COMPANY: $company
EMAIL: $email
PHONE: $phone

MESSAGE:
$message

";

/* Send the message using mail() function */
mail($myemail, $subject, $message, $header);

/* Redirect visitor to the thank you page */
header('Location: /');
exit();

function check_input($data)
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
return $data;
}

?>