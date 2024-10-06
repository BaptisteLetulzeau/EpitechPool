<?php
function form_is_submitted() {
    return isset($_POST['submit']);
}

function whoami() {
    $name = isset($_POST['name']) ? $_POST['name'] : null;
    $age = isset($_POST['age']) ? $_POST['age'] : null;
    $value_curr = isset($_POST['curriculum']) ? $_POST['curriculum'] : null;

    $curriculum_names = [
        'pge' => 'PGE (Programme Grande Ecole)',
        'msc' => 'MSc Pro',
        'coding' => 'Coding Academy',
        'wac' => 'Web@cademie'
    ];

    $output = '';

    if (!$name && !$age) {
        $output = "Hi, I have no name.";
    } elseif (!$name && $age !== null && is_numeric($age)) {
        $output = "Hi, I have no name and I'm $age years old.";
    } elseif ($name && ($age === null || !is_numeric($age))) {
        $output = "Hi, my name is $name.";
    } elseif ($name && is_numeric($age)) {
        $output = "Hi, my name is $name and I'm $age years old.";
    }

    if (!empty($value_curr) && isset($curriculum_names[$value_curr])) {
        $output .= " I'm a student of " . $curriculum_names[$value_curr] . ".";
    }

    echo $output;
}
?>