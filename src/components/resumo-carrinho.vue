<template>

<div class="card border-light shadow m-2" >
  <div class="card-body" id="resumo-carrinho">
    <h5 class="card-title">Resumo:</h5>
    <p class="card-text pt-5">Valor das aulas:           <b>{{valorAulas}}</b> </p>
    <p class="card-text ">Desconto aplicado:         <b>{{desconto}}</b> </p>
    <h5 class="card-text py-3">Total:                    <b>{{totalCarrinho}}</b> </h5>
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
    

    data: ()=>{
    return {
      aulas: [
        {
          nome:'Álgebra Linear ',
          price: 'R$ 120.00',
          image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvidaconmascotas.com%2Fwp-content%2Fuploads%2F2021%2F01%2F1610477250_El-gato-habla-mucho-%25C2%25BFque-nos-quiere-decir-850x500.jpg&f=1&nofb=1',
        },
        {
          nome:'Geometria Analítica ',
          price: 'R$ 20.00',
          image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.grouphealth.ca%2Fwp-content%2Fuploads%2F2018%2F05%2Fplaceholder-image-300x225.png&f=1&nofb=1',
        },
        {
          nome:'Estatística Básica ',
          price: 'R$ 220.00',
          image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.grouphealth.ca%2Fwp-content%2Fuploads%2F2018%2F05%2Fplaceholder-image-300x225.png&f=1&nofb=1',
        },
      ],
      
      desconto:'R$ 30.00',
      valorAulas:'R$ 720.00',
      totalCarrinho: 'R$ 690.00',
    }
  }


}
</script>

<style scoped>
 .card{
  width: 18rem;
 }

</style>