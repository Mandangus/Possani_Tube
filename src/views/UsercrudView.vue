<template>

<div class="container shadow-lg overflow-auto mt-3" id>
  <div class="row align-items-center border-bottom my-2 py-2" v-for="user in users" :key="user.email">
    
    <div class="col">
      {{user.name}}
    </div>

    <div class="col">
      {{user.email}}
    </div>

    <div class="col">
        <div class="row">
            <div class="col">
                <button v-if="user.isAdm" type="button" class="btn btn-primary" @click="demoteUser(user.email)">Remover ADM</button>
                <button v-else type="button" class="btn btn-success" @click="promoteUser(user.email)">Tornar ADM</button>
            </div>
            <div class="row my-2">
                <div class="col">
                    <button type="button" class="btn btn-danger" @click="deleteUser(user.email)">Excluir Usuário</button>
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
    created: async function() {
        let route = "http://localhost:3000/store/"
        let resp = await fetch(route);	
        resp = await resp.json();
        this.users = resp
    },
    data: () => {
        return {
          users: []
        }
    },
    methods: {
      deleteUser: async function(email) {
        try {
            let route = "http://localhost:3000/store/"+email 
            fetch(route, {method: 'DELETE'});	
        }
        catch (e) {alert("Error: " + e);}
      },
      promoteUser: async function(email) {
        try {
            let route = "http://localhost:3000/store/promote/"+email
            fetch(route, {method: 'PUT'});	
        }
        catch (e) {alert("Error: " + e);}
      },
      demoteUser: async function(email) {
        try {
            let route = "http://localhost:3000/store/demote/"+email
            fetch(route, {method: 'PUT'});	
        }
        catch (e) {alert("Error: " + e);}
      }
    }
  }
</script>

<style scoped>
 .container {
  max-height: 900px;
}
</style>
