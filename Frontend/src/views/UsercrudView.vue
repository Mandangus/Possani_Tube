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
                <!-- <router-link to="/userCrud"> -->
                <button v-if="user.isAdm" type="button" class="btn btn-primary" @click="demoteUser(user.email)">Remover ADM</button>
                <button v-else type="button" class="btn btn-success" @click="promoteUser(user.email)">Tornar ADM</button>
                <!-- </router-link> -->
            </div>
            <div class="row my-2">
                <div class="col">
                    <router-link to="/userCrud">
                    <button type="button" class="btn btn-danger" @click="deleteUser(user.email)">Excluir Usuário</button>
                    </router-link>
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
        let route = "http://localhost:"+"3000"+"/store/"
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
            let route = "http://localhost:"+"3000/store/"+email 
            fetch(route, {method: 'DELETE'});
            for (let i = 0; i < this.users.length; i++) {
                if (this.users[i].email === email) {
                    this.users.splice(i, 1)
                    break;
                }
            }	
        }
        catch (e) {alert("Error: " + e);}
      },
      promoteUser: async function(email) {
        try {
            let route = "http://localhost:"+"3000"+"/store/promote/"+email
            fetch(route, {method: 'PUT'});	
            for (let i = 0; i < this.users.length; i++) {
                if (this.users[i].email === email) {
                    this.users[i].isAdm = true
                    break;
                }
            }
        }
        catch (e) {alert("Error: " + e);}
      },
      demoteUser: async function(email) {
        try {
            let route = "http://localhost:"+"3000"+"/store/demote/"+email
            fetch(route, {method: 'PUT'});
            fetch(route, {method: 'PUT'});	
            for (let i = 0; i < this.users.length; i++) {
                if (this.users[i].email === email) {
                    this.users[i].isAdm = false
                    break;
                }
            }	
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
