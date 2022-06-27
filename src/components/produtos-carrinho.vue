<template>

<div class="container shadow-lg" id>
  <div class="row align-items-center border-bottom" v-for="(aula, index) in aulas" :key="aula.nome">
    
    <div class="col">
      <img class="img-fluid" v-bind:src="aulas[index].image" :alt="aulas.nome" />
    </div>

    <div class="col">
      {{aula.nome}}
    </div>

    <div class="col">
      {{aula.price}}
    </div>

    <div class="col">
      <div class="row mt-3">
        <div class="col offset-2">
          <button id="removeItem" type="button" class="btn btn-light">Remover</button> <br>
                    <img class="img-fluid" id="trash-icon" :src="trashIcon"/>

        </div>
      </div>
        

        
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
        {
          nome:'Cálculo 4 ',
          price: 'R$ 120.00',
          image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.grouphealth.ca%2Fwp-content%2Fuploads%2F2018%2F05%2Fplaceholder-image-300x225.png&f=1&nofb=1',
        },
        {
          nome:'Cálculo 4 ',
          price: 'R$ 120.00',
          image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.grouphealth.ca%2Fwp-content%2Fuploads%2F2018%2F05%2Fplaceholder-image-300x225.png&f=1&nofb=1',
        },
        {
          nome:'Cálculo 4 ',
          price: 'R$ 120.00',
          image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.grouphealth.ca%2Fwp-content%2Fuploads%2F2018%2F05%2Fplaceholder-image-300x225.png&f=1&nofb=1',
        }
      ],
      
      trashIcon: require('@/assets/icones/trash-icon.png'),

    }
  }


}
</script>

<style scoped>
.list-group{
    width: 50rem;
    height: 15rem;
}
#trash-icon{
  width: 50%;
}

</style>
