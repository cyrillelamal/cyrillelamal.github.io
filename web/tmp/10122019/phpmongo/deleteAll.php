<?php
header('Location: ./read.php');

require_once __DIR__ . '/vendor/autoload.php';
require_once 'PassReader.php';


use function PassReader\getPasswordFrom;
$pass = getPasswordFrom('password');
$connstr = "mongodb+srv://test17:$pass@lambda-d9bqi.mongodb.net/test?retryWrites=true&w=majority";
$client = new MongoDB\Client($connstr);

$db = $client->Mollitiaearum;

$coll = $db->quosdolores;

$coll->drop();
