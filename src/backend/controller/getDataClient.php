<?php

include_once('connectDatabase.php');

class getDataClient {
    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }

    // Função responsável por requisitar os dados  dos clientes
    public function getClients() {
        try {
            $sql = "SELECT id, name, phone, email FROM clients  ORDER BY name";
            $result = $this->conn->query($sql);

            if ($result->num_rows > 0) {
                // Itera sobre os resultados
                while ($row = $result->fetch_assoc()) {
                    $data[] = $row;
                }
                return $data;
            } else {
                return array('message' => '0 results');
            }
        } catch (\Throwable $th) {
            return array('error' => $th->getMessage());
        }
    }
}
?>
