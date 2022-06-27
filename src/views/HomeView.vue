<template>
<div class="homepage">
        <div id="home">
          <h2 id="section-title">Títulos mais vendidos!</h2>
          <section id="contents">
          <div class="col-md-4" v-for="aula in aulas" :key="aula.nome">
          <div id="card-aula">
            <div class="card text-primary bg-light mb-4" id="card-aula">
              <img class="card-img-top" :src="aula.image" :alt="aula.nome">
              <div class="card-body">
                <h4 class="card-title">{{ aula.nome }}</h4>
                <div class="card-text">{{ aula.price }}</div>
                <div class="row justify-content-end">
                  <div class="col">
                    <router-link to="/produto" > <button class="btn btn-primary">Ver produto</button> </router-link>
                  </div>            
                </div>
                </div>
              </div>
            </div>
          </div>
          </section>
          <h2 id="section-title">Novos Títulos!</h2>
          <section id="contents">
          <div class="col-md-4" v-for="aula in aulas" :key="aula.nome">
          <div id="card-aula">
            <div class="card text-primary bg-light mb-4" id="card-aula">
              <img class="card-img-top" :src="aula.image" :alt="aula.nome">
              <div class="card-body">
                <h4 class="card-title">{{ aula.nome }}</h4>
                <div class="card-text">{{ aula.price }}</div>
                <div class="row justify-content-end"> 
                  <div class="col">
                  <router-link to="/produto" > <button class="btn btn-primary">Ver produto</button> </router-link>            
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          </section>
        </div>
</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default {
  
  name: 'App',
  
  components: {
  },

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
      ]
    }
  }
}
</script>

<style scoped>
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
