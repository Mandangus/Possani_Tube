<template>

<div class="carrinho"> 
  <header_main></header_main>
  <div class="conteiner m-4">
    <div class="row d-flex justify-content-center">
      <div class="col-6">  
        <produtosCarrinho> </produtosCarrinho>
      </div>   
      <div class="col-2">
        <resumo-carrinho> </resumo-carrinho>
        <CardPagamento></CardPagamento>
      </div>   
    </div>   
  </div> 
 
  <footer_main></footer_main>
</div> 
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import header_main from './components/header-main'
import footer_main from './components/footer-main'
import resumoCarrinho from "./components/resumo-carrinho.vue";
import produtosCarrinho from "./components/produtos-carrinho.vue";
import CardPagamento from "./components/card-pagamento.vue";

export default {
  
  name: 'App',
  
  components: {
    header_main,
    footer_main,
    resumoCarrinho,
    produtosCarrinho,
    CardPagamento,
},

}
</script>

<style>

#card-aula{
  padding: 5px;
}
#contents{
    
    display: flex;
    flex-wrap: wrap;
}
#section-title{
  padding: 20px;
}
</style>
