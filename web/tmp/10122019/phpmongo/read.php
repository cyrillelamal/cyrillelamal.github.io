<?php
require_once __DIR__ . '/vendor/autoload.php';
require_once 'PassReader.php';


use function PassReader\getPasswordFrom;


$pass = getPasswordFrom('password');
$connstr = "mongodb+srv://test17:$pass@lambda-d9bqi.mongodb.net/test?retryWrites=true&w=majority";
$client = new MongoDB\Client($connstr);

$db = $client->Mollitiaearum;

$coll = $db->quosdolores;

$users = $coll->find();
$numOfRecords = count($users = $users->toArray());


echo '<a href="./index.php">Reculer</a>';
echo '<br>';
echo "Il y a <i>$numOfRecords</i> entrées dans la collection.";

echo '<table>';
foreach($users as $usr) {
    echo '<tr>';
    echo "<td>$usr[name]</td>";
    echo "<td>$usr[city]</td>";
    echo '</tr>';
}
echo '</table>';
