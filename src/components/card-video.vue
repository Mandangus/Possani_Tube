<template>

<div class="container shadow-lg py-4">
     <div class="row justify-content-md-center">
        <div class="col col-md-auto">
            <div class="card border-0" style="width: 55rem;">
                <h5 class="card-title">{{aula.nome}}</h5>
                <div class="card-body">
                    <img class="img-fluid" id="videothumb" :src="aula.image"/>   
                </div>
            </div>
        </div>
    </div>
    <div class="row justify-content-md-center">
        <div class="col-md-auto">     
            <div class="card border-dark p-2" style="width: 25rem; height: 15rem;">
                <h5 class="card-title">Descrição</h5>
                <p class="card-text" style="line-height: 230%;">{{aula.description}}</p>
            </div>
        </div>
        <div class="col-md-auto">
            <div class="row">
                <div class="col-7   g-3">
                    <h3 class="card-title">{{aula.price}} </h3> 
                </div>
                <div class="col g-2">
                    <button class="btn btn-primary btn-lg" type="submit">
                        <img :src="cartIcon" width="35" />
                        Comprar
                    </button>
                </div>

            </div>     
            <div class="card border-0 my-3" style="width: 25rem;">
                <div>
                    
                </div>
                <p class="card-text">{{aula.detalhes}}</p>
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
          price: 'R$ 120.00',
          image: require('@/assets/Videoaula.png'),
          description: 'Aula da disciplina Cálculo I - MCA-001. Curso de Engenharia - Turma 2016 -  Univesp Universidade Virtual do Estado de São Paulo.  Professor responsável pela disciplina: Claudio Possani Professor ministrante: Claudio Possani',
          detalhes: 'Nesta aula introdutória do curso, o incrível Prof. Cláudio Possani faz um panorama das ideias abordadas pela disciplina e de sua importância na formação de um engenheiro ',
        },
        
        cartIcon: require('@/assets/cart.png'),

        }
    }
}
</script>

<style>

@media (min-width: 1200px) {
    .container{
        max-width: 1200x;
    }
}



</style>