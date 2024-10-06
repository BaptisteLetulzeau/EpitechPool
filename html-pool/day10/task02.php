<?php
if (isset($_GET['name'])) {
    header('Content-Type: application/json');
    $name = $_GET['name'];
    $response = array("name" => $name);
    echo json_encode($response);
} 
elseif (isset($_GET['email'])){
    header('Content-Type: application/json');
    $email = $_GET['email'];
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response = array("email" => $email);
        echo json_encode($response);
    }
    else {
        http_response_code(400);
        echo json_encode(array("error" => "Invalid email format."));
    }
}
else {
    http_response_code(400);
    echo json_encode(array("error" => "No name or email provided."));
}
?>
