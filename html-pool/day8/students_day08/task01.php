<?php
function discover_type(string $name, int $age, bool $isStudent, float $gpa = 0.0) {
    if ($isStudent) {
        echo "Hello my name is $name, I'm $age years old. I'm a student at Epitech with a GPA of $gpa.";
    } else {
        echo "Hello my name is $name, I'm $age years old. I'm not a student.";
    }
}
?>