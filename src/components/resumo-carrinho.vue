<template>

<div class="card border-light shadow m-2" >
  <div class="card-body" id="resumo-carrinho">
    <!-- <h5 class="card-title">Resumo:</h5> -->
    <!-- <p class="card-text pt-5">Valor das aulas:           <b>R${{cartPrice}}</b> </p> -->
    <!-- <p class="card-text pt-5">Valor das aulas:           <b>{{valorAulas}}</b> </p> -->
    <!-- <p class="card-text ">Desconto aplicado:         <b>{{desconto}}</b> </p>
    <h5 class="card-text py-3">Total:                    <b>{{totalCarrinho}}</b> </h5> -->
    <h5 class="card-text py-3">Total:                    <b>R${{cartPrice}}</b> </h5>
    <div class="row m-1">
        <button type="button" class="btn btn-primary">Finalizar Compra </button>
    </div>
    <div class="row m-1">
        <button type="button" class="btn btn-primary">Continuar Comprando</button>
    </div>
  </div>
</div>


</template>

<script> 


export default{
    name: 'resumo_carrinho',
    
    computed: {
      cartPrice() {
        return this.$store.getters.cartPrice
      }
    }


}
</script>

<style scoped>
 .card{
  width: 18rem;
 }

</style>