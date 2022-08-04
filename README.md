# API Projeto QG Finanças

Esta API é responsável para fornecer as rotas para manipulação do nosso banco
de dados.

## Como iniciar o projeto 

Para iniciar o projeto basta baixa-lo e rodar o comando "npm start". 

### Tecnologias usandas nele

Esta API foi desenvolvida com o Node Js e o framework Express
O Banco de dados onde fica armazenado as informações é o MongoDB Atlas.

Link da API -> https://backendprojetoweb.herokuapp.com/

### Como utilizar a aplicação

Dentro da API existe três rotas que são elas: "/saida" e "/entrada",
no momento estamos utilizando apenas a estrada e saida, a rota de person será
utilizada futuramente para a implementação de usuários no sistema. Em cada rota é 
possível fazer as quatro operações do CRUD, porém a opção de update deve se usar o
Patch e não put. Para facilitar o uso da mesma decidimos que as 4 operações respectivas
de cada tipo seria com a mesma rota, mudando apenas a chamada da função dentro do front end.

### Estrutura de pastas do projeto

O código dos nosso modelos está na pasta models, e as rotas para manipular esses modelos estão na pasta routes.
