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
          image: require('@/assets/thumbnails/calc3.png'),
        },
        {
          nome:'Geometria Analítica ',
          price: 'R$ 20.00',
          image: require('@/assets/thumbnails/pgeometrica.png'),
        },
        {
          nome:'Estatística Básica ',
          price: 'R$ 220.00',
          image: require('@/assets/thumbnails/pgeometrica.png'),
        },
        {
          nome:'Cálculo 4 ',
          price: 'R$ 120.00',
          image: require('@/assets/thumbnails/calculo4.png'),
        },
        {
          nome:'Cálculo 4 ',
          price: 'R$ 120.00',
          image: require('@/assets/thumbnails/calculo4.png'),
        },
        {
          nome:'Cálculo 4 ',
          price: 'R$ 120.00',
          image: require('@/assets/thumbnails/calculo4.png'),
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
