# Desafio Sharenergy-2023-01 - Crud de clientes

Construir uma aplicação web (frontend e backend) capaz de realizar a comunicação com APIs distintas, além de um CRUD.

## Tecnologias

1. NestJS
2. MongoDB
3. Typescript
4. Docker / Docker Compose
5. Swagger
6. Git / GitFlow

## Arquitetura

1. DDD
2. SOLID
3. Clean architecture

## Ambiente de desenvolvimento

|                     |          |
| :-----------------: | :------: |
| Sistema Operacional | Manjaro  |
|       NestJS        |  9.0.0   |
|       NodeJS        | 18.12.1  |
|        Yarn         | 1.22.19  |
|       Postman       |  10.6.0  |
|       VsCode        |  1.70.2  |
|       Docker        | 20.10.21 |
|    Google Chrome    |   106    |

## Como executar o projeto

Instale as dependências com

```bash
yarn
```

Execute o container do banco de dados e a aplicação com

```bash
yarn start:dev
```

Documentação da API disponível em http://localhost:3000/docs

| Método |       Urls        |              Descricao              |
| :----: | :---------------: | :---------------------------------: |
|  POST  |    /customers     |      Cadastra um novo cliente       |
|  GET   |    /customers     | Lista todos os clientes cadastrados |
|  GET   | /customers/`{id}` |     Lista um cliente específico     |
| DELETE | /customers/`{id}` |          Deleta um cliente          |
| PATCH  | /customers/`{id}` |         Atualiza um cliente         |
