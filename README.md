# Integra Médicos

Sistema de gestão de cadastros de médicos desenvolvido para o processo seletivo da empresa.

O projeto contém um banco de dados em MySQL, um backend com [Node.js](https://nodejs.org/en/) + [nest.js](https://nestjs.com/) e um frontend em [React](https://pt-br.reactjs.org/).

## Pré-Requisitos

Ter o [Docker](https://docs.docker.com/get-docker/) e o [Docker Compose](https://docs.docker.com/compose/install/) instalados na máquina.

O backend e front end foram executados em repositórios diferentes. Execute inicialmente o [repositório](https://github.com/brunosa91/Integra_medico_API) onde consta a api e banco de dados seguindo o passo a passo na documentação.

## Rodando o projeto

- Faça um clone do repositório

```
git clone https://github.com/brunosa91/Integra_medico_API
```

- Entre na pasta

```
cd Integra_medico_API
```

- Rode o comando abaixo para criar as imagens e os containers

```
docker-compose up -d --build
```

O endpoint do backend pode ser acessado pelo `http://localhost:4000/cadastro`.

- Para parar os containers basta rodar:

```
docker-compose stop
```
