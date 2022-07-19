<template>

<div class="card border-light shadow m-2" >
  <div class="card-body" id="resumo-carrinho">
    <h5 class="card-title">Pagamento:</h5>
    <form>
        <input type="radio" name="credit-card" value="credit" v-model="pay_method"> Cartão de crédito  
        <br>
        <input type="radio" name="credit-card" value="boleto" v-model="pay_method"> Boleto
        <br>
    </form>
        <credit v-if="pay_method === 'credit'"></credit>
    <br>
        <form>
            <div class="form-group">
                <label for="cartaoCredito">Cupom de desconto</label>
                <input type="text" class="form-control" id="cupom" aria-describedby="cupomHelp" placeholder="Digite um cupom válido">
            </div>
            <button type="submit" class="btn btn-primary mt-2">Aplicar Cupom</button>
    
        </form>
  </div>
</div>

</template>

<script>
import credit from "@/components/card-cartao.vue"
export default {
    name: 'card-pagamento',
    components: {
    credit,
},
    data() {
        return {
            pay_method: ""
        }
    }
}
</script>


<style scoped>
 .card{
  width: 18rem;
 }

 form {
    text-align: left;
 }

</style>