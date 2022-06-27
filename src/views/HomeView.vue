<template>
<div class="homepage">
        <div id="home">
          <h2 id="section-title">Títulos mais vendidos!</h2>
          <login_form></login_form>
          <section id="contents">
          <div class="col-md-4" v-for="aula in aulas" :key="aula.nome">
          <div id="card-aula">
            <div class="card text-primary bg-light mb-4" id="card-aula">
              <img class="card-img-top" :src="aula.image" :alt="aula.nome">
              <div class="card-body">
                <h4 class="card-title">{{ aula.nome }}</h4>
                <div class="card-text">{{ aula.price }}</div>
                <div class="row justify-content-end">
                <router-link to="/produto" > <button class="btn btn-primary">Ver produto</button> </router-link>            
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
                  <router-link to="/produto" > <button class="btn btn-primary">Ver produto</button> </router-link>            
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
      ]
    }
  }
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
