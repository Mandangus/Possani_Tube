<template>
<div class="homepage">
        <div id="home">
          <h2 id="section-title">Títulos mais vendidos!</h2>
          <section id="contents">
          <div class="col-md-4" v-for="aula in aulas" :key="aula.nome">
          <div id="card-aula">
            <div class="card text-primary bg-light mb-4" id="card-aula">
              <img class="card-img-top" :src="aula.thumbnail" :alt="aula.nome">
              <div class="card-body">
                <h4 class="card-title">{{ aula.nome }}</h4>
                <div class="card-text">{{ aula.price }}</div>
                <div class="row justify-content-end">
                  <div class="col">
                    <router-link to="/produto"> 
                      <button class="btn btn-primary" v-if="!user.isAdmin">Ver produto</button> 
                      <button class="btn btn-primary" v-else>Gerenciar produto</button> 
                    </router-link>
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
              <img class="card-img-top" :src="aula.thumbnail" :alt="aula.nome">
              <div class="card-body">
                <h4 class="card-title">{{ aula.nome }}</h4>
                <div class="card-text">{{ aula.price }}</div>
                <div class="row justify-content-end"> 
                  <div class="col">
                    <router-link to="/produto" v-if="!user.isAdmin"> 
                      <button class="btn btn-primary">Ver produto</button> 
                    </router-link>                  
                    <router-link to="/produto" v-else> 
                      <button class="btn btn-primary">Gerenciar produto</button> 
                    </router-link>     
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
  mounted(){
    window.addEventListener("load", () => this.$store.commit('getProducts'));
  },
  computed: {
    aulas() {
      return this.$store.getters.storeProducts
    },
    user() {
      return this.$store.getters.userLogged
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

.homepage {
  font-family: Montserrat;
}
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
