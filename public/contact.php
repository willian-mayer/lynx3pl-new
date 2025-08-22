<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header("Content-Type: text/plain; charset=UTF-8");

    $to = "info@lynx3pl.com";
    $subject = "New Contact Form Submission";

    $name = strip_tags(trim($_POST["name"] ?? ""));
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"] ?? "");
    $interests = isset($_POST["interests"]) ? $_POST["interests"] : "None";

    $body = "You received a new message:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Interests: $interests\n\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email\r\nReply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo " We are so glad you reached out. Your message has been received, and one of our team members will reach out within 1 business day. In the meantime, feel free to check out our FAQ or follow us on social media.";
    } else {
        http_response_code(500);
        echo "error";
    }
} else {
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
