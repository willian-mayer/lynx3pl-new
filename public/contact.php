<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@lynx3pl.com";
    $subject = "New Contact Form Submission";

    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
    $interests = isset($_POST["interests"]) ? implode(", ", $_POST["interests"]) : "None";

    $body = "You received a new message:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Interests: $interests\n\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email\r\nReply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
