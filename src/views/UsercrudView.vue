<template>

<div class="container shadow-lg overflow-auto mt-3" id>
  <div class="row align-items-center border-bottom my-2 py-2" v-for="user in users" :key="user.email">
    
    <div class="col">
      {{user.nome}}
    </div>

    <div class="col">
      R${{user.email}}
    </div>

    <div class="col">
        <div class="row">
            <div class="col">
                <button v-if="user.isAdm" type="button" class="btn btn-primary ">Remover ADM</button>
                <button v-else type="button" class="btn btn-success" >Tornar ADM</button>
            </div>
            <div class="row my-2">
                <div class="col">
                    <button type="button" class="btn btn-danger">Excluir Usuário</button>
                </div>
            </div>
        </div>
     
    </div>  
  </div>
</div>


</template>

<script> 


export default{
    name: 'resumo_carrinho',
    data: ()=>{
        return {

        users: [
            {
            nome:'Cláudio Possani',
            email: 'superpossani@gmail.com',
            isAdm: true,
            },
            {
            nome:'Cláudio Possani',
            email: 'superpossani@gmail.com',
            isAdm: false,
            },
            {
            nome:'Cláudio Possani',
            email: 'superpossani@gmail.com',
            isAdm: false,
            },
            {
            nome:'Cláudio Possani',
            email: 'superpossani@gmail.com',
            isAdm: true,
            },
            {
            nome:'Cláudio Possani',
            email: 'superpossani@gmail.com',
            isAdm: false,
            },
            {
            nome:'Cláudio Possani',
            email: 'superpossani@gmail.com',
            isAdm: true,
            }
        ]
        }
    }


}
</script>

<style scoped>
 .container {
  max-height: 900px;
}
</style>
