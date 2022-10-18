<?php
session_start();
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
    if (isset($a['username']) and isset($a['password']) and isset($a['passwordConfirm'])){
        if ($a['passwordConfirm']===$a['password']){
            $info = $connexion->prepare("INSERT INTO users(username, password) VALUES (:username, :password)");
            try {$bb=$info->execute([
                "username"=>$a['username'],
                "password"=>$a['password']
            ]);}
            catch(PDOException $e) {
                echo json_encode([ok=>0]);}
            if($bb){
              echo json_encode(
              [ok=>1
              ]);
              }
    
            

    }}
    else{
        echo json_encode([id=>0]);
  }}
?>