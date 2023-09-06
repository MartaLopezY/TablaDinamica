<?php
$persona = new stdClass();

$persona -> nombre= ["Juan","Maria","Pedro","Lucia"];
$persona->  apellidos=["Rodriguez Garcia","Suarez Diaz","Sanchez Martinez","Perez Hermida"];
$persona -> edad =[30,25,28,33];
$persona -> telefono=[654789321,632145975,615234798,678945312];

echo json_encode($persona);
?>
