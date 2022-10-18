<?php
$connexion=new PDO(
    'mysql:host=localhost;dbname=blogs;charset=utf8',
    'root',
    'password',
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION],
);
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Headers: Special-Request-Header');
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: http://10.42.0.1:3000');
if ($_SERVER['REQUEST_METHOD']==='GET'){
    if (isset($_GET['delete'])){
        echo json_encode($_GET['delete']);
        $info=$connexion->prepare('delete from blogs where id= :id');
        $info->execute(['id'=>$_GET['delete']]);
    }
    else {
        $info=$connexion->prepare('select blogs.id,blogs.title,blogs.content,blogs.authorID,users.username from blogs join users on users.id=blogs.authorID');
        $info->execute();
        $blogs=$info->fetchAll();
        echo json_encode($blogs);
    }}
elseif($_SERVER['REQUEST_METHOD']==='POST'){
    $a=json_decode(file_get_contents('php://input'),true);
    if (isset($a['title']) and isset($a['author']) and isset($a['content'])){
        $info=$connexion->prepare('insert into blogs(title,author,content) values ( :title, :author, :content)');
        $info->execute(['title'=>$a['title'],
                       'author'=>$a['author'],
                       'content'=>$a['content']
    ]); 
    }
    else{
        echo "error hhh";
    }
}
?>