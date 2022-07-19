# TrabalhoWebDev
Trabalho de Desenvolvimento Web - ICMC - 1 semestre - 2022 - Grupo 28



Relatório do Projeto:

## Sumário
* [Grupo 28](#grupo-28)
* [Descrição do Projeto](#descrição-do-projeto)
* [Requisitos](#requisitos)
* [Comentários sobre o Código](#comentários-sobre-o-código)
* [Plano de Testes](#plano-de-testes)
* [Resultado dos Testes](#resultado-dos-testes)
* [Tutorial da Instalação da Aplicação](#tutorial-da-instalação-da-aplicação)
* [Problemas encontrados](#problemas-encontrados)
* [Comentários adicionais](#comentários-adicionais)  

## Grupo 28
 - Rafael Corona  |  Número USP: 4769989
 - Victor Gomes |  Número USP: 11275168
 - Antonio Rodrigues Rigolino | Número USP: 11795791

## Descrição do Projeto
- Neste projeto, vamos implementar uma loja de vídeos da lenda Cláudio Possani! O aluno terá um perfil e poderá navegar nas diversas categorias de vídeos à venda.
 Ao comprar um vídeo o aluno receberá acesso à aula. E poderá aproveitar 50 minutos de pura adrenalina e conhecimento!

## Requisitos
- O sistema possui dois tipos de usuários, Clientes e Administradores:  
      - Administradores são resposáveis por registrar/gerenciar administradores, clientes e os produtos/serviços providos. A aplicação já vem com uma conta admin com senha admin  
     - Clientes são usuários que acessam o sistema para comprar produtos/serviços 
- Os dados de Administrador incluem: nome, id, endereço, email, senha. 
- Os dados de cada cliente incluem: nome, id, endereço, email, senha.  
- Os dados de cada vídeo-aula incluem: nome, id, foto da prévia, descrição, detalhes, preço, quantidade vendida, URL para o vídeo e URL para a prévia.
- Venda de vídeo-aulas: As licenças para assistir video-aulas são selecionadas, e incluídas no carrinho. Licenças são compradas usando o número de um cartão de crédito (qualquer número é aceitado pelo sistema). A quantidade de licenças vendidas é adicionada à quantidade vendida. Carrinhos são esvaziados somente no pagamanto ou pelos clientes. 
- Gerenciamento de Produtos/Serviços: Administradores podem criar/atualizar/ler/deletar novos produtos e serviços.
- Prévia de video-aula: será possível que Clientes e Administradores visualizem a prévia de uma aula antes de realizar a compra da mesma
- O sistema deve ser responsivo e prover boa usabilidade e requisitos de acessibilidade

#### Funcionalidade extra
 Qualquer cliente poderá visualizar uma prévia de cada aula, para que possa decidir se quer comprá-la ou não


#### Informações armazenadas no servidor
 - Dados de usuário cliente: (nome, id, endereço, email, senha)
 - Dados de usuário administrador: (nome, id, email, senha)
 - Dados de cada vídeo aula: (nome, id, foto da prévia, descrição, detalhes, preço, quantidade vendida, URL para o vídeo, URL para a prévia)
 - Total de aulas vendidas

#### Mockups
É possível encontrar os mockups para a interface seguindo o link abaixo ou na pasta [./mockups](../master/Mockups). Usando o figma, é possível simular o diagrama de navegação e ver a mudança de página interativamente.  
 
 - *https://www.figma.com/file/0C5hczX8YT6wsqRWEi6mxq/Prot%C3%B3tipo-grupo-28?node-id=4%3A0*
 - *https://www.figma.com/file/FhbXYlTMHMhcYQZRXy6hTd/Simplified-Navigation-Diagram?node-id=0%3A1*
 
## Comentários sobre o Código
- O código foi estruturado da seguinte maneira: (explicar)

## Plano de Testes    
Planejamos testar a consistência e responsividade do sistema em diversos dispositivos e navegadores
### Testes de responsividade
Para testar a responsividade do layout do site, vamos variar a resolução horizontal da aba do navegador, para garantir que o layout do site seja adequado para todos os viewports
### Testes de funcionalidade
Serão feitos diversos testes para detectar bugs que afetem a lógica do site, entre eles:
- Testes feitos com um usuário administrador
    - Adicionar/Remover/Atualizar produtos
    - Remover/Atualizar usuários
    - Tentar remover a permissão administrativa de si mesmo
    - Tentar Remover/Atualizar um produto ou usuário não existente
    - Fazer o logout
- Testes feitos com um usuário Cliente
    - Comprar produtos e depois assistir o vídeo
    - Assistir prévias sem comprar o produto
    - Tentar comprar um mesmo vídeo duas vezes
    - Fazer o logout
- Testes feitos sem um usuário logado
    - Tentar comprar um vídeo
    - Fazer o login
    - Cadastrar um novo usuário
    
## Resultado dos Testes
- Após testar a responsividade de todas as páginas em diversos viewports, percebemos que alguns elementos se comportavam de maneira estranha, de forma a quebrar o layout do site. Foram feitas as devidas correções
(explicar os testes de código)


## Tutorial da Instalação da Aplicação  
(melhorar) 
### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
np#m run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Problemas encontrados 
(encher linguiça?)
- Durante o desenvolvimento desse projeto, esbarramos em dificuldades para corrigir pequenos detalhes de responsividade. Após diversos testes e consultas à documentação das bibliotecas utilizadas, corrigimos esses erros.
- Tivemos problemas para realizar a conexão com a base de dados hospedada pelo MongoDB Atlas. Eventualmente, conseguimos efetuar a conexão satisfatóriamente.
## Comentários adicionais  
