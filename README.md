# Projeto — CRUD + MongoDB + Docker

Projeto composto por um **frontend estático** servido pelo Nginx e um **backend Node.js + Express**, com conexão ao MongoDB.

## Pré-requisitos

Para executar o projeto, é necessário ter instalado:

* Docker
* Docker Compose

O Docker Compose já está disponível nas versões atuais do Docker Desktop e do Docker Engine através do comando:

```bash
docker compose
```

## Configuração do MongoDB

O backend utiliza o MongoDB como banco de dados.

Antes de iniciar o projeto, é necessário criar o arquivo:

```text
backend/.env
```

Dentro dele, adicione a variável `MONGODB_URI` com a string de conexão do seu MongoDB.

Exemplo:

```env
MONGODB_URI=mongodb+srv://USUARIO:SENHA@SEU-CLUSTER.mongodb.net/?appName=Cluster0
```

A estrutura deve seguir este padrão:

```env
MONGODB_URI=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/?appName=Cluster0
```

Substitua:

* `<usuario>` pelo usuário do MongoDB
* `<senha>` pela senha do usuário
* `<cluster>` pelo endereço do seu cluster

## Executando o projeto

Na raiz do projeto, onde está localizado o `docker-compose.yml`, execute:

```bash
docker compose up --build
```

O Docker irá:

1. Criar a imagem do frontend.
2. Criar a imagem do backend.
3. Instalar as dependências do Node.js.
4. Iniciar o container do frontend com Nginx.
5. Iniciar o container do backend com Node.js.
6. Conectar o backend ao MongoDB.

## Acessando o projeto

Depois de iniciar os containers:

### Frontend

```text
http://localhost:8080
```

O frontend é servido pelo Nginx na porta `8080` da máquina local.

### Backend

O backend roda na porta `3000`.


