<template>

<div class="card border-light shadow m-2" >
  <div class="card-body" id="resumo-carrinho">
    <h5 class="card-title">Pagamento:</h5>
    <form>
        <input type="radio" name="credit-card" value="red"> Cartão de crédito  
        <br>
        <input type="radio" name="credit-card" value="red"> Boleto
        <br>
    </form>
    <br>
    <!-- <p class="card-text "> <b>cartão de crédito</b> </p> -->
        <form>
            <div class="form-group">
                <label for="cartaoCredito">Cupom de desconto</label>
                <input type="text" class="form-control" id="cupom" aria-describedby="cupomHelp" placeholder="Digite um cupom válido">
            </div>
            <button type="submit" class="btn btn-primary mt-2">Aplicar Cupom</button>

            <!-- <div class="form-group">
                <label for="exampleInputPassword1">Cartão de crédito</label>
                <input type="text" class="form-control" id="credidCard" pattern="[0-9.]+" placeholder="Número do cartão">
            </div> -->
    
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

 form {
    text-align: left;
 }

</style>