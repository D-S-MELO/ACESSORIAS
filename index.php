<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clientes Acessórias</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col text-center">
        <h1>Clientes</h1>
      </div>
    </div>

    <div class="row mt-5">
      <table class="table" id="table">
        <thead>
          <tr class="bg-info">
            <th scope="col" hidden>ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Telefone</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>
        <tbody id="dados"></tbody>
      </table>
    </div>

    <div class="row mt-5">
      <nav id="areaPagination">
        <ul class="pagination" id="pagination"></ul>
      </nav>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="src/controller/list.js"></script>
</body>
</html>
