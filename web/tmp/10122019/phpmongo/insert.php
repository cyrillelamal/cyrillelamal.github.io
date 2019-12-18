<?php
header('Location: ./read.php');
require_once __DIR__ . '/vendor/autoload.php';
require_once 'PassReader.php';


use function PassReader\getPasswordFrom;


$faker = Faker\Factory::create();

$pass = getPasswordFrom('password');
$connstr = "mongodb+srv://test17:$pass@lambda-d9bqi.mongodb.net/test?retryWrites=true&w=majority";
$client = new MongoDB\Client($connstr);

$db = $client->Mollitiaearum;

$coll = $db->quosdolores;


for ($i=0; $i < $_GET['num']; $i++) { 
    $usr = [
        'name' => $faker->name('male'),
        'city' => $faker->city,
        'mail' => $faker->email
    ];

    $coll->insertOne($usr);
}
