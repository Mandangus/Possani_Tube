<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/"><img src="../assets/icones/logo.png" width="80"></router-link>
      <router-link to="/" class="navbar-brand" >Possani's Store</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/carrinho" class="nav-link active py-0" aria-current="page">Carrinho</router-link>

          </li>
          <li class="nav-item dropdown">

            <a class="nav-link dropdown-toggle py-0" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Matérias
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    

              <li><router-link to="/" class="dropdown-item" >Algebra</router-link></li>
              <li><router-link to="/" class="dropdown-item" >Geometria Analítica</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link to="/" class="dropdown-item" >Novas Matérias</router-link></li>
            </ul>
          </li>
          <template v-if="user.active">
            <li class="py-0">
              <router-link to="/perfil"><img src="@/assets/icones/Profile_avatar_placeholder_large.png" class="imagem mt-2"></router-link>          
            </li>              
            <li>
              <ul id="profile">
                <li>
                  <router-link to="/perfil" style="text-decoration: none; color: inherit; font-weight: 500;"> 
                    <b>Minha conta</b>
                  </router-link> 
                <li>
                  <router-link to="/"><button type="button" class="customize" @click="signOutUser"><b>Sair</b></button></router-link>
                  <!-- <b>Sair</b> -->
                </li>  
                </li>
                <li>
                  <router-link to="/perfil" style="text-decoration: none; color: inherit;"> 
                    <b>Minha conta</b> 
                  </router-link> 
                  <router-link to="/"><button type="button" class="customize" @click="exitUser">
                    <b>| Sair</b>
                  </button></router-link>
                </li>  

              </ul>
            </li> 
          
          <li v-if="user.isAdm" class="nav-item mx-2 pt-4">
            <router-link to="/userCrud" class="nav-link active py-0" aria-current="page">Gerenciar<br> Usuários</router-link>
          </li>
          <li v-if="user.isAdm" class="nav-item mx-2 pt-4">
            <router-link to="/productCrud" class="nav-link active py-0" aria-current="page">Adicionar <br> Vídeo</router-link>
          </li>
          </template>
        <li v-else class="mb-3">
            <router-link to="/login" style="text-decoration: none; color: inherit;">
            <ul id="login">
             <li >Faça <b>login</b> ou</li>
             <li>Crie seu <b>cadastro</b></li>
            </ul>
            </router-link>
          </li>

          
            
          
        </ul>
        <form class="d-flex">
          <input class="form-control me-3" type="search" placeholder="Pesquisar" aria-label="Search" v-model="searchkey">
          <button class="btn btn-outline-success" type="submit">Ok</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
// import usuario from "../data/usuario.js"
// import usuario from "../data/user"

export default {
  
  name: 'header',
  computed: {
      user() {
        return this.$store.getters.userLogged
      }
  },
  methods: {
    signOutUser() {
      this.$store.commit('signOutUser')
    }
}
}
</script>

<style scoped>


.customize {
  outline: none;
  padding: 5px; 
  border: 0px; 
  box-sizing: none; 
  background-color: transparent;
}
.nav-item{
  padding-top: 27px;
}

.navbar-brand{
  font-weight: bolder;
  font-size: x-large;
}
.dropdown-item{
  color: black;
}
#login{
  list-style-type: none; 
  padding: 0; 
  margin-top: 20px;
  margin-left: 10px;
  text-decoration: none;
  text-decoration-line: none;
}
#profile{
  list-style-type: none; 
  padding: 0; 
  margin-top: 23px;
  margin-left: 10px;
  text-align:center;
  text-decoration: none;
  text-decoration-line: none;
}
</style>
