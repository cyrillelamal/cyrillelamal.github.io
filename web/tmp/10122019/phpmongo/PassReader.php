<?php
namespace PassReader;


/**
 * Return content of the file
 */
function getPasswordFrom($filename) {
    $passFile = fopen($filename, 'r') or die('No password file');
    $pass = fread($passFile, \filesize($filename));
    fclose($passFile);
    return $pass;
}
