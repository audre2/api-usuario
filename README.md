# api-usuario

Esse é um repositório que pode ser usado como ponto de partida para desenvolvimento com Nodejs e Typescript. Para esse projeto, foi construído uma API de usuário que faz conexão com o mongodb, além disso possui testes unitários integrado com mocha e chai. Esse repositório já vem junto com arquivos dockerfile e docker-compose que podem ser usado em um fluxo de CI/CD.

## Instalação

#### 1. Clonar o repositório

```
$ git clone https://github.com/audre2/api-usuario.git nome-app
$ cd nome-app
```

#### 2. Instalar dependências

```
$ npm install
$ npm install nodemon (para facilitar o desenvolvimento)
```
## Desenvolvimento

### Como rodar a aplicação

Para facilitar o desenvolvimento, rode utilizando o docker-compose. Ele vai subir tanto o mongodb, quanto o node em containers separados.

```
$ docker-compose up -d
```

URLs dos serviços
* 🌏**API Server** running at `http://localhost:3000`
* ⚙️**Swagger UI** at `http://localhost:3000/doc`
* 🛢️**MongoDB** running at `mongodb://localhost:27017`

Collection do postman para testes:
https://www.getpostman.com/collections/3785d6fc5c3d2959da13

## Desenvolvimento e deploy
#### 1. Rodar sem o docker.

Necessário editar a variável host localizado no app.ts e apontar para localhost.

```
$ npm run dev (utiliza o nodemon)
$ npm run build && npm test && npm run start
```
Obs. É necessário que o mongodb esteja rodando local.

#### 2. Rodar pelo docker

Node
```
$ docker build -t defina_um_nome .
$ docker run --name node-api -p 3000:3000 -d defina_um_nome
```
Mongo
```
$ docker pull mongo
$ docker run --name defina_um_nome -p 27017:27017 -d mongo
```
