<?php 
function dynamic_body(){
    if (isset($_GET['page'])) {
        $page = $_GET['page'];

        return render_body(($page));
    }
    else{
        return "<p>Unknown page</p>";
    }
}

function render_body($page){
    $pages = [
        'home' => 'home.html',
        'sql' => 'sql.html',
        'php' => 'php.html'
    ];

    if (array_key_exists($page, $pages)) {
        $file_path = $pages[$page];

        if (file_exists($file_path)) {
            return file_get_contents($file_path);
        } else {
            return "<p>File not found: $file_path</p>";
        }
    } 
    else {
        return "<p>Unknown page</p>";
    }
}