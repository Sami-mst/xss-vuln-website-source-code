
<?php
$connexion=new PDO(
    'mysql:host=localhost;dbname=blogs;charset=utf8',
    'root',
    'password',
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION],
);

header('Access-Control-Allow-Origin: http://10.42.0.1:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400');
if($_SERVER['REQUEST_METHOD']==='POST'){
    $a=json_decode(file_get_contents('php://input'),true);
    if (isset($a['title']) and isset($a['content'])){
        $info=$connexion->prepare('insert into blogs(title,content,authorID) values ( :title , :content , :authorID)');
        $info->execute([
            'title'=>$a['title'],
            'content'=>$a['content'],
            'authorID'=>$a['authorID']
        ]
        ); 
    }
}
?>