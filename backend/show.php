<?php
$connexion=new PDO(
    'mysql:host=localhost;dbname=blogs;charset=utf8',
    'root',
    'password',
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION],
);
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: http://10.42.0.1:3000');
if (isset($_GET['id'])){
$info=$connexion->prepare('select * from blogs where id= :id');
$info->execute(['id'=>$_GET['id']]);
$blog=$info->fetchAll();
echo json_encode($blog);}
?>