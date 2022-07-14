<template>

<div class="container">
    <div class="product-form">
        <label>Nome do produto</label>
        <input type="text" class="form-control" placeholder="Nome do produto" v-model="nome">
        <br>
        <label>Preço do produto</label>
        <input type="text" class="form-control" placeholder="Preço do produto" v-model="preco">
        <br>
        <label>Descrição do produto</label>
        <textarea class="form-control" rows="3" placeholder="Insira aqui a descrição do produto" v-model="descricao"></textarea>
        <br>
        <label>Detalhes do produto</label>
        <textarea class="form-control" rows="3" placeholder="Insira aqui detalhes do produto" v-model="detalhes"></textarea>
        <br>
    </div>
    <button type="submit" class="btn btn-primary">Adicionar produto</button>
</div>

</template>

<script>
export default {
    name: 'product-form',
    data() {
        return {
            name: "",
            preco: "",
            descricao: "",
            detalhes: ""
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
label, h1 {
    font-size: 20px;
    font-weight: bold;
}
.container {
    margin-top: 20px;
    font-family: Montserrat;
}
.product-form {
    text-align: left;
    /* display: flex;
    flex-direction: column;
    align-content: center; */
}
/* .product-form {
    display: flex;
    flex-direction: column;
} */
input {
    width: 300px;   
}
textarea {
    width: 500px;
}
</style>