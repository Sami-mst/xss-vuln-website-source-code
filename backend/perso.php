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
$info=$connexion->prepare('select blogs.id,blogs.title,blogs.content,blogs.authorID,users.username from blogs join users where users.id=blogs.authorID and blogs.authorID=:id');
$info->execute(['id'=>$_GET['id']]);
$blogs=$info->fetchAll();
echo json_encode($blogs);
?>