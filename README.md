<div align="center">
<img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHQrxGNe9f3dw/company-logo_200_200/0/1566477608985?e=2159024400&v=beta&t=cSCPVzwlf96fNaQdjOj-nh6v2ZM1pM4YHlhF4OS2w8A" width="250" height="250"/>
<p>API PLAYBOOK</p>
API Playbook é uma consultoria especializada em API Design e Developer Experience. Apoiamos grandes empresas no desenho de suas APIs, estratégia de apresentação para tomadores de decisão além da operação completa do Portal de Desenvolvedores, desde o suporte N1 até a produção de conteúdos como artigos e tutoriais, além do relacionamento com o público alvo através de webinars, meetups, eventos e hackathons.

</div>
<br />
<br />

### Configurações

Faça o donwload do repositório ou execute no cmd este comando.

```sh
git clone "Clone"
```

Após a clonagem do app execute no seu terminal esse comando para entrar na pasta do projeto.

```sh
cd apiplaybook
```

Pronto! Estamos dentro!

Para melhorar a minha explicação e o entendimento de vocês peço
que baixem um editor de texto, como o Visual Studio Code, Atom, Notepad ++, entre outros.

Mas Recomendo Fortemente o Visual Studio Code, pela facilidade de uso e de estilização.

Visual Studio Code: https://code.visualstudio.com/download

Com o Visual Studio baixado e instalado, digite no seu terminal o seguinte codigo.
```sh
code .
```

Viu que bacana ?! Bora lá, que tem muita coisa bacana pela frente.


Como pode notar temos duas pastas o frontend e o backend.

Vamos começar pelo backend!

<br />

### Backend

Fizemos o nosso backend em [Typescript](https://www.typescriptlang.org/), que é um subconunto de JavaScript desenvolvido pela Microsoft que adiciona tipagens e alguns recusos a linguagem. 

Volte para o cmd aberto na pasta "apiplaybook" e digite.
```sh
cd backend
```

Com a pasta do seu projeto aberto chegou a vez de instalar-mos todos os pacotes do nosso backend, não vou explicar
cada biblioteca para não ficar com uma didática chata mas deixo abaixo e recomendo fortemente que vocês deem uma olhada em
todas :)
```sh
yarn install
```

Após a finalização da instalação foi criado uma pasta chamada "node_modules" no geral ela é
responsavel por guardas todas as nossas bibliotecas.

<br/>

### Execução

Dando continuidade ao nosso projeto, chegou a hora de executar-mos. E é agora que a maioria dos desenvolvedores tem problemas,
pois nem sempre os aplicativos e frameworks que estão na minha maquina são os mesmos que estão na de vocês e para solucionar esse problema, temos o [Docker](https://www.docker.com/).

O [Docker](https://www.docker.com/) é uma plataforma open source que facilita a criação e administração de ambientes isolados. Ele possibilita o empacotamento de uma aplicação ou ambiente dentro de um container, se tornando portátil para qualquer outro host que contenha o Docker instalado. Então, para dar continuidade ao nosso projeto será necessario instalar o [Docker](https://www.docker.com/) e o [Docker Compose](https://docs.docker.com/compose/install/).

Antes de iniciarmos a nossa execução do backend precisamos baixar um banco de dados para receber os dados do nosso cartão,
para essa tarefa eu escolhi o [Postgres](https://www.postgresql.org/).

O [Postgres](https://www.postgresql.org/) é um banco de dados relacional ou seja é um banco que modela os dados de uma forma que eles sejam percebidos pelo usuario como uma tabela.

Após baixar o [Postgres](https://www.postgresql.org/), temos que baixar o Postbird [](https://www.electronjs.org/apps/postbird) que n é simplesmente um software feito em [Electron](https://www.electronjs.org/) que gera uma interface gráfica do [Postgres](https://www.postgresql.org/).

Agora está tudo pronto para nossa execução.

Então abra novamente o seu terminal e dentro dele execute:

```sh
docker-compose up
```

Prontoooo! Você criou seu primeiro container! Meus parabéns!

"Tá Keetener, mas eai?"

Calma, já te explico! Esse comando executou um arquivo que está na raiz do nosso projeto, o "docker-compose.yml" abrindo esse arquivo vemos que ele tem

```yml
version: '3'

services:

# Esse aqui é o "serviço" da nossa conexão com o banco de dados , quando você digitou o docker-compose up ele executou esse código e
# criou um container, para visualizar ele em execução digite "docker container list -a" no seu cmd você vai ver que ele mostrará as
# informações dos container siniciados e se tudo aconteceu como planejado vai aparecer um bonitinho lá escrito "postgres-playbook".
  postgres-playbook:
    container_name: postgres-playbook
    image: postgres:11
    restart: unless-stopped
    volumes:
      - postgres-playbook-data:/data
    environment:
      POSTGRES_DB: ${DB_NAME}
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASS}
    networks:
      - app-connect
    ports:
      - "5439:5432"


volumes:
      postgres-playbook-data:

networks:
  app-connect:
      driver: bridge
```

Poderia ficar horas e horas explicando sobre o container e suas maravilhas para vocês, mas vamos deixr para uma próxima! :)

Feito isso, execute: 

```sh
yarn typeorm migration:run
```

Esse comando executará todas as nossas migrations do (Typeorm)[https://typeorm.io/#/].

E por fim, execute tambem: 

```sh
yarn dev:server
```

<br/>

### Frontend

Aqui tudo fica mais facil, o frontend foi todo feito em [ReactJS](https://pt-br.reactjs.org/), que é a uma biblioteca JavaScript para criar insterfaces de usuário! Simples definicão, não?! Mas esse "trem" é uma maravilha!

Chega de lenga lenga e bora executar para finalmente podermos finalizar esse extenso tutorial!

Dentro do seu cmd, imaginando que você esteja dentro da pasta "backend" digite os seguintes comandos.

```sh
cd ./frontend
yarn start
```

Pronto! Agora só aguardar que abrirá uma aba no seu navegador com o projeto já executado é hora dos testes!

Seja Feliz!

## Bibliotecas utilizas e as suas documentações
* <a href="https://nodejs.org/en/"><code><b>Node</b></code></a>
* <a href="https://www.typescriptlang.org/"><code><b>Typescript</b></code></a>
* <a href="https://pt-br.reactjs.org/"><code><b>ReactJS</b></code></a>
* <a href="https://expressjs.com/pt-br/"><code><b>Express</b></code></a>
* <a href="https://www.docker.com/"><code><b>Docker</b></code></a>
* <a href="https://typeorm.io/#/"><code><b>Typeorm</b></code></a>
* <a href="https://www.postgresql.org/"><code><b>Postgres</b></code></a>
* <a href="https://graphql.org/"><code><b>GraphQL</b></code></a>

