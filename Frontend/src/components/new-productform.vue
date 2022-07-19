<template>

<div class="container">
    <div class="product-form">
        <label>Nome do produto</label>
        <input type="text" class="form-control" placeholder="Nome do produto" v-model="nome">
        <br>
        <label>Preço do produto</label>
        <input type="text" class="form-control" placeholder="Preço do produto" v-model="preco">
        <br>
        <label>Matéria do produto</label>
        <textarea class="form-control"  placeholder="Insira aqui a matéria do produto" v-model="materia"></textarea>
        <br>
        <label>Descrição do produto</label>
        <textarea class="form-control" rows="3" placeholder="Insira aqui a descrição do produto" v-model="descricao"></textarea>
        <br>
        <label>Detalhes do produto</label>
        <textarea class="form-control" rows="3" placeholder="Insira aqui detalhes do produto" v-model="detalhes"></textarea>
        <br>
        <label>Link da CDN do vídeo</label>
        <textarea class="form-control" placeholder="Insira aqui o link da CDN do vídeo" v-model="video"></textarea>
        <br>
        <label>Link da CDN da prévia</label>
        <textarea class="form-control" placeholder="Insira aqui o link da CDN da prévia" v-model="previa"></textarea>
        <br>
        <label>URL da thumbnail</label>
        <textarea class="form-control" placeholder="Insira aqui a URL da thumbnail" v-model="thumbnail"></textarea>
        <br>
    </div>
    <button type="submit" class="btn btn-primary" @click="addVideo">Adicionar produto</button>
</div>

</template>

<script>

function getVal() {
  const val = document.querySelector('input').value;
  console.log(val);
}

export default {
    name: 'product-form',
    data() {
        return {
            name: "",
            preco: "",
            descricao: "",
            detalhes: "",
            video: "",
            previa: "",
        }
    },

    methods: {
      addVideo: async function() {
            try {
                let route = "http://localhost:3000/product/"
                fetch(route, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    "nome": this.nome,
                    "preco": this.preco,
                    "materia": this.materia,
                    "descricao": this.descricao,
                    "detalhes": this.detalhes,
                    "video": this.video,
                    "preview": this.preview, 
                    "vendas": 0,
                    "thumbnail": this.thumbnail, 
                    "active": true
                  })
                });	
              }
            catch (e) {alert("Error: " + e);}
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
