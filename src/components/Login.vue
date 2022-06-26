<template>
  <div id="raiz-login">
    <div class="center_block">
      <div class="login_page">
        <h1 class="log_text search-bar">LOGIN</h1><br>
        <form action="cadastro.php" method="POST">
          <input type="email" name="email" placeholder="Email" required v-model="login_email"><br>
          <br>
          <input type="password" name="senha" placeholder="Senha" required v-model="login_pwd"><br>
          <br>
          <input type="submit" name="entrar" value="ENTRAR">
        </form>
        <br>
        <a href="#"> <u>Esqueci minha senha</u></a>
        <br><br>
        <hr><br>
        <h1 class="log_text"> Entrar com redes sociais</h1>
        <a href="#">
          <img src="./images/google.png" height="50">
        </a>
        <a href="#">
          <img src="./images/facebook.png" height="50">
        </a>
      </div>

      <div class="signup_page">
        <h1 class="log_text search-bar">CRIAR CADASTRO</h1> <br>
        <form action="cadastro.php" method="POST">
          <input type="email" name="email" placeholder="Email" required v-model="signup_email"><br>
          <br>
          <input type="password" name="senha" placeholder="Senha" required v-model="signup_pwd"><br>
          <br>
          <input type="password" name="c_senha" placeholder="Confirme sua senha" required v-model="signup_cpwd"><br>
          <br>
          <input type="text" name="endereço" placeholder="Endereço" required v-model="address"><br>
          <br>
          <input type="tel" name="celular" placeholder="Celular" required v-model="phone"><br>
          <br>
          <input type="submit" name="entrar" value="CADASTRAR">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login-comp',
  data() {
    return {
      login_email: "",
      login_pwd: "",
      signup_email: "",
      signup_pwd: "",
      signup_cpwd: "",
      address: "",
      phone: ""
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Login.css" scoped>
</style>
