# API RESTFUL TS

Este projeto consiste em um sistema de CRUD utilizando Express, Yup para validação de dados e Knex como query builder. O objetivo principal é demonstrar habilidades no desenvolvimento de backend, enfatizando a validação de dados, o tratamento de erros e o uso de TypeScript para uma melhor compreensão da lógica e identificação de erros.

# 1. Configuração Inicial

Para instalar todas as dependencias, no cmd, digite o seguinte comando:

```
yarn install

ou

npm install
```

# 2. Configuração inicial do banco de dados

Basta criar um banco de dados sem nenhuma configuração adicional, e conectar ele ao projeto preenchendo os dados de conexão nas váriaveis de ambiente.

Como neste projeto foi utilizado o MySql, segue abaixo um script SQL para criar um banco básico no MySql Workbench:

```
create database database_name
default character set utf8mb4
default collate utf8mb4_general_ci;
```

# 3. Variáveis de ambiente

No arquivo .env.example, preencha os campos:

```
PORT=
NODE_ENV=
IS_LOCALHOST=false

DATABASE_HOST=
DATABASE_PORT=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=
```

- Para rodar localmente em ambiente de desenvolvimento mude o conteúdo da variável IS_LOCALHOST para true.
- A variavel PORT referencia a porta da qual você deseja rodar o servidor.
- Preencha as váriaveis que iniciam com "DATABASE_" com os valores para se conectar com o banco de dados.
- Basta renomear o nome do arquivo ".env.example" para ".env"

# 4. Comandos para rodar o projeto

O principal comando é o ```yarn start ou npm start```, ele vai iniciar a execução do projeto, segue a lista de outros comandos e suas funcionalidades:

```
production
knex:migrate
knex:rollback
knex:rollback-all
knex:seed
```

- ```production``` - é utilizado para um projeto já hospedado e em produção.

- ```knex:migrate``` - executa os comandos de criação e registra os "logs" em uma tabela separada (UP).

- ```knex:rollback``` - executa os comandos de exclusão do ultimo arquivo executado e registra os "logs" em uma tabela separada (DOWN).

- ```knex:rollback-all``` - executa os comandos de exclusão de todos os arquivos e registra os "logs" em uma tabela separada (DOWN).

- ```knex:seed``` - executa a inserção dos dados iniciais caso não tenha dados no banco de dados.

- OBS: o comando ```knex:seed``` é um comando caso queira executar manualmente a inserção, o projeto já adiciona as seeds por padrão caso não tenha dados na base.
