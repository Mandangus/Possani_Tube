<template>

<div class="container shadow-lg py-4">
    <div class="row justify-content-md-center">
        <div class="col">
            <h3>{{aula.nome}}</h3>
        </div>
    </div>

    <div class="row">
        <div class="col iframe-container mx-2">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Utj5xUmUEvk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>


    <div class="row justify-content-center" align="center">
        <div class="col- col-lg-5">     
            <div class="card border-dark p-2 mt-4" id="descript" style="width: 25rem; height: 15rem;">
                <h5 class="card-title">Descrição</h5>
                <p class="card-text" style="line-height: 230%;">{{aula.description}}</p>
            </div>
        </div>
        <div class="col- col-lg-5 ">
            <div class="card border-0" style="width: 25rem;"> 
                <div class="row mt-4">
                    <div class="col">
                        <h3 id="preco">{{aula.price}} </h3> 
                    </div>
                    <div class="col">
                        <button class="btn btn-primary btn-lg" type="submit">
                            <img :src="cartIcon" width="35" />
                            Comprar
                        </button>
                    </div>


                </div>
                <div class="row mt-4">
                    <div class="col">     
                        <p>{{aula.detalhes}}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>


</template>

<script>
export default{
    name: 'video_card',

    data: ()=>{
        return {

        aula:
        {
          nome:'Álgebra Linear',
          price: 'R$ 120,00',
          image: require('@/assets/Videoaula.png'),
          description: 'Aula da disciplina Cálculo I - MCA-001. Curso de Engenharia - Turma 2016 -  Univesp Universidade Virtual do Estado de São Paulo.  Professor responsável pela disciplina: Claudio Possani Professor ministrante: Claudio Possani',
          detalhes: 'Nesta aula introdutória do curso, o incrível Prof. Cláudio Possani faz um panorama das ideias abordadas pela disciplina e de sua importância na formação de um engenheiro ',
        },
        
        cartIcon: require('@/assets/icones/cart.png'),

        }
    }
}
</script>

<style scoped>

@media (min-width: 1200px) {
    .container{
        max-width: 1200x;
    }
}

#descript {
    background-color: #F2F3F4
}

#preco{
    color: #0d6efd;
    font-size: xx-large;
    font-weight: bolder;
}

.iframe-container{
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 0;
}
.iframe-container iframe{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
