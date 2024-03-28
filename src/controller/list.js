$(document).ready(function () {
  getDataClient();
});

/**
 * Função Responsável por buscar os dados de clientes na base
 */
function getDataClient() {
  $.ajax({
    url: '/ACESSORIAS/src/backend/controller/connect.php',
    method: 'GET',
    dataType: 'json',
    dataType: 'json',
    processData: false,
    contentType: false,
    success: function (response) {
      createTablePagination(response, 1, 10);
      createPagination(1, response.length / 10);
    },
    error: function (xhr, status, error) {
      displayMessage(
        'Atenção',
        'Ocorreu um erro ao buscar os dados de Cliente',
        'error'
      );
    },
  });
}

/**
 * Função Responsável por mostrar uma mensagem personalizada caso apresente
 * algum erro
 * @param {*String} title
 * @param {* String} menssage
 * @param {* String} icon
 */
function displayMessage(title, menssage, icon) {
  Swal.fire({
    title: `${title}`,
    text: `${menssage}`,
    icon: `${icon}`,
    width: '22em',
  });
}

/**
 * Função Responsável gerar os dados da tabela de clientes
 * @param data array
 * @param  currentPage int
 * @param itemsPerPage int
 * */
function createTablePagination(data, currentPage, itemsPerPage) {
  var totalData = data.length;
  var dataClient = $('#table  tbody');

  // Seta Variavel de controle a ser reutilizada em todo código.
  localStorage.setItem('DATA', JSON.stringify(data));
  localStorage.setItem('TOTALDATA', totalData);

  if (data) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // cria dinamicamente conforme os paramaetros os dados na tabela clientes
    for (var i = startIndex; i < endIndex && i < data.length; i++) {
      const row = $('<tr>');
      row.append($(`<td id =${i} >`).text(data[i]['name']));
      row.append($(`<td id =${i} >`).text(formatPhoneNumber(data[i]['phone'])));
      row.append($(`<td id =${i} >`).text(data[i]['email']));
      dataClient.append(row);
    }
  }
}

/**
 * Função Responsável por criar a paginação da tabela conforme regra
 * @param  currentPage int
 * @param itemsPerPage int
 * */
function createPagination(currentPage, totalPage) {
  var $pagination = $('#pagination');
  $pagination.empty();

  // Cria dinamicamente a tab 1 da paginação
  $pagination.append(
    `<li class="page-item-1"><a id= "1" class="page-link" href="#" data-page="1">1</a></li>`
  );

  var pagesToShow = 4;
  var startPage = currentPage - 1;
  var endPage = currentPage + 2;

  if (startPage <= 1) {
    startPage = 2;
    endPage = Math.min(startPage + pagesToShow - 1, totalPage - 1);
  }

  if (endPage >= totalPage) {
    endPage = totalPage - 1;
    startPage = Math.max(endPage - pagesToShow + 1, 2);
  }

  if (startPage > 2) {
    $pagination.append(`<li class="page-item-next"><a>...</a></li>`);
  }
  for (var i = startPage; i <= endPage; i++) {
    //Cria os links de paginação conforme limite estipulado na regra
    $pagination.append(
      `<li class="page-item-${i}"><a id='${i}' class="page-link" href="#" data-page="${i}">${i}</a></li>`
    );
  }

  if (endPage < totalPage - 1) {
    //Cria os links de paginação NEXT ... para mostra que existem mais páginas
    $pagination.append(`<li class="page-item-next"><a>...</a></li>`);
  }

  $pagination.append(
    //Cria link de paginação informando a ultima página disponível
    `<li class="page-item-${i}"><a id='${i}' class="page-link" href="#" data-page="${totalPage}">${totalPage}</a></li>`
  );

  // Altera a cor do botão para ter uma visualização da página clicada melhor
  $(`#${currentPage}.page-link`).css('color', '');
  $(`#${currentPage}.page-link`).css('color', 'red');
}

// Evento responsável por escutar o clique nos links de página e atualizar os dados de paginação e dados
$(document).on('click', '.page-link', function (e) {
  e.preventDefault();

  // valor da numeração da paginação que foi clicada
  var pageNumber = $(this).data('page');

  // Pega Variaveis de controle para que não seja necessário várias requisições para paginar.
  var data = localStorage.getItem('DATA');
  var totalData = localStorage.getItem('TOTALDATA');

  // Remove a tag tr para sempre colocar os dados segundo a paginação
  $('#table tbody tr').remove();

  // Cria os dados na tabela novamente
  createTablePagination(JSON.parse(data), pageNumber, 10);
  // Cria Altera a paginação segundo regra
  createPagination(pageNumber, totalData / 10);
});

// Função Responsável por setar mascara no campo telefone
function formatPhoneNumber(input) {
  let formatted =
    '(' +
    input.substring(0, 2) +
    ') ' +
    input.substring(2, 6) +
    '-' +
    input.substring(6, 10);

  // Atualiza o valor do campo com o número de telefone formatado
  return (input.value = formatted);
}
