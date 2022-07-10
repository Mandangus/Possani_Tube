<template>

<div class="container shadow-lg" id>
  <div class="row align-items-center border-bottom" v-for="aula in cart" :key="aula.nome">
  <!-- <div class="row align-items-center border-bottom" v-for="(aula, index) in aulas" :key="aula.nome"> -->
    
    <div class="col">
      <img class="img-fluid" v-bind:src="aula.image" />
      <!-- <img class="img-fluid" v-bind:src="aulas[index].image" :alt="aulas.nome" /> -->
    </div>

    <div class="col">
      {{aula.nome}}
    </div>

    <div class="col">
      R${{aula.price}}
    </div>

    <div class="col">
      <div class="row mt-3">
        <div class="col offset-2">
          <button id="removeItem" type="button" class="btn btn-light" @click="removeFromCart(aula)">Remover</button> <br>
          <!-- <button id="removeItem" type="button" class="btn btn-light" @click="removeFromCart(aula)">Remover</button> <br> -->
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
    computed: {
      cart() {
        return this.$store.getters.cartItems
      }
    },
    data: () => {
        return {
            trashIcon: require('@/assets/icones/trash-icon.png')
        }
    },
    methods: {
        removeFromCart(aula) {
            this.$store.commit('removeFromCart', aula)
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
