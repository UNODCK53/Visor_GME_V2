<?php
$db_server = '10.1.2.17';
$db_user = 'gestioninfogme';
$db_password = 'gestioninfogme';
$db_schema = 'gestioninfogme';

$connection = mysql_connect($db_server, $db_user, $db_password);
mysql_select_db($db_schema, $connection);
?>