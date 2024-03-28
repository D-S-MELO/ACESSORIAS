<?php
class Connect {
    private $servername;
    private $username;
    private $password;
    private $dbname;
    private $conn;
    
    public function __construct($servername, $username, $password, $dbname) {
        $this->servername = $servername;
        $this->username = $username;
        $this->password = $password;
        $this->dbname = $dbname;
        $this->connect();
    }
    // Função responsável por fazer a conexão com o banco de daddos
    private function connect() {
        try {
            $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
            if ($this->conn->connect_error) {
                throw new Exception("Ocorreu um erro ao conectar ao bando de dados: " . $this->conn->connect_error);
            }
        } catch (Exception $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    // Função responsável gerar uma nova conexão
    public function getConnection() {
        return $this->conn;
    }
}