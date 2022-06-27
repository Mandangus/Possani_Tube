<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand mt-3" >Possani's Store</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
          <li>
           <router-link to="/perfil" ><img src="@/assets/icones/Profile_avatar_placeholder_large.png" class="imagem mt-2"></router-link>          
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
</style>