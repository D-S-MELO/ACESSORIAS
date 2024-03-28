# Teste prático de Lógica + PHP + MySQL

## Objetivo

O objetivo deste projeto é fornecer dados de clientes através de uma página simples em HTML

#### Tecnologias Utilizadas

HTML5: Utilizado para estruturar o conteúdo da página.
BOOTSTRAP: Utilizado para estilizar e definir o layout da página.
PHP: Utilizado para estrutura de backend, conexão e busca de dados da página.
JQUERY: utilizado para manupilação de dados da página, como criação de paginação e manipulação da tabela.
XAMPP: utilizando como servidor local para rodar o projeto, e criação de bases de dados MYSQL;

##### Como Executar:

1 - Certifique-se de ter um servidor web XAMPP instalado em sua máquina local.
1.1 Caso não tenha siga os passos abaixo:

- Acesse o site oficial do XAMPP em https://www.apachefriends.org/pt_br/index.html.
- Baixe o instalador para o sistema operacional que você está usando (Windows, Linux ou macOS).
- Siga as Instruções de Instalação:
- O assistente de instalação do XAMPP irá guiá-lo através do processo de instalação normalmente.
- Durante a instalação, recomendamos instalar os componentes padrão, que incluem Apache, MySQL, PHP e phpMyAdmin.

  1.1.2 - Faça download do projeto ou clone o repositório usando o comando git clone seguido da URL do repositório:

```bash
 https://github.com/D-S-MELO/ACESSORIAS.git
```

1.2.3 Após o XAMPP devidamente instalado, e o projeto devidamente baixado siga os passos abaixo:
-Extraia na pasta do projeto na pasta de instalação do xampp servidor web chamada htdocs.

- Exemplo: Caminho de instalação padrão para a extração da pasta C:\xampp\htdocs.
  Atenção esse caminho pode variar de acordo com o local de instalação do servidor.

  1.2.4 para a criação do banco de dados, tabelas e clientes siga os passos abaixo:

  - Execute o XAMPP iniciando o componente MYSQL para, após iniciado acessar http://localhost/phpmyadmin/ no seu navegador padrão.
  - Com o phpmyadmin aberto vá até a aba SQL e execute o scrip abaixo:

```
  CREATE DATABASE acessorias;
```

1.2.5 - Com o banco dados criado agora vamos fazer a criação de uma nova tabela, siga os passos abaixo:

- Selecione a base acessorias no canto superior a esquerda e vá na aba script, cole o script abaixo para criação da tabela

```
CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(20),
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

- Acesse a pasta do projeto, na raiz o arquivo contem um arquivo clientes que contem os dados para teste.
- Execute esse script na aba SQL, para inserir os dados de clientes fake.

  1.2.6 - Execute o XAMPP iniciando o componente APACHE para subir o servidor, assim que iniciar basta acessar no seu navegadr padrão:

```
  http://localhost/ACESSORIAS/
```
