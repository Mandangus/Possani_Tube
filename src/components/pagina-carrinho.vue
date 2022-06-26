<template>

<div class="carrinho"> 
  <header_main></header_main>
  <div class="conteiner m-4" >
    <div class="row justify-content-center">
      <div class="col- col-lg-8 col-xl-6" align="center" >  
        <produtosCarrinho> </produtosCarrinho>
      </div>   
      <div class="col- col-lg-4 col-xl-2" align="center">
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
import header_main from './header-main'
import footer_main from './footer-main'
import resumoCarrinho from "./resumo-carrinho.vue";
import produtosCarrinho from "./produtos-carrinho.vue";
import CardPagamento from "./card-pagamento.vue";
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
