<?php
if (isset($_GET['name'])) {
    header('Content-Type: application/json');
    $name = $_GET['name'];
    $response = array("name" => $name);
    echo json_encode($response);
} 
else {
    http_response_code(400);
    echo json_encode(array("error" => "No name provided."));
}
?>
