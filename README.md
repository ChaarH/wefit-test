## Backend - Wefit

Seja bem vindo ao teste de backend da Wefit.

### Para iniciar o banco de dados é necessario ter o docker-compose instalado em sua máquina e rodar o seguinte comando:

    docker-compose up -D

o docker-compose vai criar um container de um MySQL e você poderá acessar via localhost:3306 e a senha do usuário **root** é **senha_root_123**

### Para iniciar o servidor express basta executar o seguinte comando:

    npm start
    ou
    yarn start

### Para iniciar o servidor express basta executar o seguinte comando:

    cd wefit-teste
    npm run dev

### Para rodar as migrations use o seguinte comando:

    node ace migration:run

### Para popular o banco de dados com as ROLES iniciais, use o seguinte comando:

    node ace db:seed

### Para acessar a documentação, use a seguinte rota:

    http://localhost:3333/docs
