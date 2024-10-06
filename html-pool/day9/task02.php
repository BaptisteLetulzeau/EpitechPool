<?php
function render_body($page) {
    $valid_pages = ['home', 'php', 'sql'];
    
    if (in_array($page, $valid_pages)) {
        $file_path = $page . ".html";
        
        if (file_exists($file_path)) {
            return file_get_contents($file_path);
        } else {
            return "<p>File not found: $file_path</p>";
        }
    } else {
        return "<p>Unknown page</p>";
    }
}
?>
