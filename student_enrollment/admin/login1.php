<?php

$host="localhost";
$user="root";
$password="";
$db="student";


session_start();

$data=mysqli_connect($host,$user,$password,$db);
if($data===false)
{
    die("connection error");
}

if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $username=$_POST["username"];
    $password=$_POST["password"];

    $sql="select * from users where username='".$username."' AND password='".$password."' ";

    $result=mysqli_query($data,$sql); 

    $row=mysqli_fetch_array($result);

    if($row["usertype"]=="user")
    {
        $_SESSION["username"]=$username;

        header("location:reg_app_index.html");
    }

    if($row["usertype"]=="admin")
    {
        $_SESSION["username"]=$username;
        
        header("location:index.php"); 
    }

    else
    {
        echo "username or password incorrect";
    }
}

?>














<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <!--<link rel="stylesheet" href="reg_app.css">-->
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="wrapper">
        <h1>Login</h1>
        <form action="" method="POST">
            <input type="text" name="username" placeholder="Username">
            <input type="password" name="password" placeholder="Password">
            <input type="submit" value="LOGIN ">
        </form>

        <div class="bottom-text">
            <a href="#">Forgot Password?</a>
            <a href="signup.html">Don't have an account?,<span>Sing up</span></a>
        </div>
    </div>

    <div id="overlay-area"></div>
</body>
</html>