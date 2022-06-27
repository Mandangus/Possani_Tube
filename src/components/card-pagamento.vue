<template>

<div class="card border-light shadow m-2" >
  <div class="card-body" id="resumo-carrinho">
    <h5 class="card-title">Pagamento:</h5>
    <p class="card-text "> <b>cartão de crédito</b> </p>
    <h5 class="card-text py-3">Total:<b>{{totalCarrinho}}</b> </h5>
        <form>
            <div class="form-group">
                <label for="cartaoCredito">Cupom de desconto</label>
                <input type="text" class="form-control" id="cupom" aria-describedby="cupomHelp" placeholder="Digite um cupom válido">
            </div>
            <button type="submit" class="btn btn-primary mt-2">Aplicar Cupom</button>

            <div class="form-group">
                <label for="exampleInputPassword1">Cartão de crédito</label>
                <input type="text" class="form-control" id="credidCard" pattern="[0-9.]+" placeholder="Número do cartão">
            </div>
    
        </form>
  </div>
</div>

</template>

<script>
</script>


<style scoped>
 .card{
  width: 18rem;
 }

</style>