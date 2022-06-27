<template>
  <header_main></header_main>

  <router-view/>
  
  <footer_main></footer_main>


</template>



<script>
import header_main from '@/components/header-main'
import footer_main from '@/components/footer-main'



export default {
  
  name: 'App',
  
  components: {
    header_main,
    footer_main,
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>