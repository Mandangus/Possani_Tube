<template>
  <div id="raiz-login">
    <div class="center_block mt-5">
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
          <img src="@/assets/icones/google.png" height="50">
        </a>
        <a href="#">
          <img src="@/assets/icones/facebook.png" height="50">
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
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

.container {
    text-align: center;
    width: 100%;
    height: 100%;
    position: relative;
}

#raiz-login{
    display: flex;
    justify-content: center;
}

.center_block {
    /* background-color: #e9e1e1; */
    background-color: #e7ecf0;
    width: 700px;
    height: 500px;
    padding: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.login_page {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    margin: auto;
}

.log_text {
    font-size: 20px;
    font-weight: bold;
}

input {
    background-color: white;
    border: 0.1px solid #BDBDBD;
    border-radius: 4px;
}

input[type="email"],
input[type="password"],
input[type="text"],
input[type="tel"] {
    /* height: 30px; */
    /* width: 230px; */
    opacity: 0.7;
    padding: 12px 24px;
}

input[type="submit"] {
    background-color: #0d6efd;
    color: #e2e2e2;
    height: 40px;
    width: 220px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    cursor: pointer;
}

.signup_page {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    margin: auto;
}


</style>
