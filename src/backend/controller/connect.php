<?php

include_once('getDataClient.php');

// Carrega os parâmetros do banco de dados do arquivo XML
$configFile = __DIR__ . '/../config/db.xml';

//Faz a leitura dos parmetros que estão dentro do arquivo config
$config = simplexml_load_file($configFile);

// Extrai os parâmetros do XML
$servername = (string) $config->servername;
$username = (string) $config->username;
$password = (string) $config->password;
$dbname = (string) $config->dbname;

// Criação da instância da classe Connect para obter uma conexão com o banco de dados
$connection = new Connect($servername, $username, $password, $dbname);
$conn = $connection->getConnection();

// Cria uma instância da classe getDataClient
$clientManager = new getDataClient($conn);

// Retorna os dados dos clientes já realiando conversão para JSON
echo json_encode($clientManager->getClients());
?>