<?php
$hostname = 'localhost';
$username = 'root';
$password = '';
$database = 'highscores';

try
{
	$dbh = new PDO('mysql:host='.$hostname.';dbname='.$database,
		$username, $password);
}
catch(PDOException $e)
{
	echo '<h1>An error occured.</h1><pre>',$e->getMessage()
		,'</pre>';
}

$sth = $dbh -> query('SELECT * FROM scores ORDER BY socre DESC LIMIT 5');
$sth->setFetchMode(PDO::FETCH_ASSOC);

$result = $sth->fetchAll();

if(count($result)>0)
{
	foreach($result as $r)
	{
		echo $r['name'], "\n_";
		echo $r['score'], "\n_";
	}
}
