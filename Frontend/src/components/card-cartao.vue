<template>
  <div>
    <div class="container">
      <div class="top-text">Informações do cartão</div>
      <div class="text-info">
        <form>
          <input type="text" placeholder="Nome no cartão" class="info"> <br>
          <input type="text" placeholder="Número do cartão" maxlength="16" class="info"> <br>
        </form>
      </div>
      <div class="select-info">
        <select v-model="day">
        <option v-for="n in 12" :key="n">{{n}} </option>
        </select>
        <select v-model="year">
        <option v-for="n in 14" :key="n">{{n+22}}</option> <br>
        </select>
        <input type="text" placeholder="CVV" maxlength="3">
      </div>
      <div class="purchase">
        <input type="submit" value="Confirmar R$X.XX">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'credit_card',
  data() {
    return {
      day: "",
      year: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

.container {
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  border-color: rgb(108, 108, 108);
  width: 255px;
  height: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.top-text {
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
}
input {
  border: 0.1px solid #BDBDBD;
  border-radius: 4px;
}
input[type="text"] {
  margin-top: 3px;
  margin-bottom: 3px;

}
input[placeholder="CVV"] {
    background-color: white;
    /* border: 0.1px solid #BDBDBD;
    border-radius: 4px; */
    opacity: 0.7;
    padding: 6px 12px;
    font-family: 'Montserrat', sans-serif;
    width: 90px;
    margin-left: 7px;
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
.info {
    background-color: white;
    border: 0.1px solid #BDBDBD;
    border-radius: 4px;
    opacity: 0.7;
    padding: 5px 1px;
    width: 200px;
    font-family: 'Montserrat', sans-serif;
}
select {
    background-color: white;
    border: 0.1px solid #BDBDBD;
    border-radius: 4px;
    opacity: 0.7;
    padding: 7px 1px;
    margin: 1px;
    font-family: 'Montserrat', sans-serif;
}
</style>
