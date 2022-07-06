<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand mt-3" >Possani's Store</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="height: 82px;">
          <li class="nav-item">
            <router-link to="/carrinho" class="nav-link active" aria-current="page">Carrinho</router-link>

          </li>
          <li class="nav-item dropdown">

            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Matérias
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    

              <li><router-link to="/" class="dropdown-item" >Algebra</router-link></li>
              <li><router-link to="/" class="dropdown-item" >Geometria Analítica</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link to="/" class="dropdown-item" >Novas Matérias</router-link></li>
            </ul>
          </li>
          <li v-if="user.login">
            <router-link to="/perfil"><img src="@/assets/icones/Profile_avatar_placeholder_large.png" class="imagem mt-2"></router-link>          
          </li>  
          
          <li v-if="user.login" >
            <ul id="profile">
              <li>
                <router-link to="/perfil" style="text-decoration: none; color: inherit; font-weight: 500;"> 
                  <b>Minha conta</b>
                </router-link> 
              <li>
                <b>Sair</b>
              </li>  
              </li>
            </ul>
          </li>

        <li v-else>
            <router-link to="/login" style="text-decoration: none; color: inherit; font-weight: 500;">
            <ul id="login">
             <li >Faça <b>login</b> ou</li>
             <li>Crie seu <b>cadastro</b></li>
            </ul>
            </router-link>
          </li> 
          
            
          
        </ul>
        <form class="d-flex">
          <input class="form-control me-3" type="search" placeholder="Pesquisar" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Ok</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import usuario from "../data/usuario.js"

export default {
  
  name: 'header',
  
  data: () => {
      return {
        user: usuario,
      }
  }
}
</script>

<style scoped>
.nav-item{
  padding-top: 30px;
}
.imagem{
  margin-left: 10px;
  height: 75px;
  border-radius: 50%;
  padding: 10px;
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
  text-align: left;
  text-decoration: none;
  text-decoration-line: none;
}
#profile{
  list-style-type: none; 
  padding: 0; 
  margin-top: 20px;
  margin-left: 10px;
  text-align: center;
  text-decoration: none;
  text-decoration-line: none;
}
</style>