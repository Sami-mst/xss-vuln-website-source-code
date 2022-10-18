<?php
session_start();

header('Access-Control-Allow-Origin: http://10.42.0.1:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Credentials : true');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json; charset=utf-8');


if($_SERVER['REQUEST_METHOD']==='POST'){
    $a=json_decode(file_get_contents('php://input'),true);
    $mysqlConnection = new PDO(
        'mysql:host=localhost;dbname=blogs;charset=utf8',
        'root',
        'password',
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION],
    
      );
    $info=$mysqlConnection->prepare('select id from users where username= :username and password= :password');
    $info->execute([
      'username'=>$a['username'],
      'password'=>$a['password']
    ]);
    $id=$info->fetchAll()[0]['id'];
    if(isset($id)){
      $_SESSION['id']=$id;
      echo json_encode(
      [id =>$id,
      session=>session_id()]);
    }
    else{
      echo json_encode([id=>0]);
    }

}
else{
  if(isset($_SESSION['id'])){
    echo json_encode($_SESSION['id']);
  }
  else{
    echo json_encode('');
  }
}

?>