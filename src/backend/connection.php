<?php

class connection
{
    var $host = "localhost";
    var $dbName = "permissions";
    var $userName = "root";
    var $password = "root";


    function connectionDb()
    {

        $myDb = new mysqli($this->host, $this->dbName, $this->userName, $this->password);
        // $mybd->query("SET NAMES 'utf8'");

        if (mysqli_connect_error()) {

            printf("ERROR ES %s\n", mysqli_connect_error());

        }

        return $myDb;
    }
}
