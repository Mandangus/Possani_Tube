<template>

<div class="container">

    <div class="row ">
        <div class="col- col-sm- col-md-6 col-lg-6 mt-4">
            <ul class="list-group" id="datalist">
                <li class="list-group-item border-0">Email:  <b>{{usuario.email}}</b> </li>
                <li class="list-group-item border-0">Celular:   <b>{{usuario.celular}}</b> </li>
                <li class="list-group-item border-0">Nome:   <b>{{usuario.nome}}</b> </li>
                <li class="list-group-item border-0">Endereço:   <b>{{usuario.endereco}}</b> </li>
            </ul>
        </div>
        <div class="col- col-sm- col-md-6 col-lg-6 mt-4">

            <div class="col-">
                    <img class="img-fluid" id="profPic" :src="profileImage"/>
                    <div class="row">
                        <div class="col my-3">
                        <button id="changePic" type="button" class="btn  btn">Alterar foto</button>
                        </div>
                    </div>


        </div>

                
            </div>


    </div>
</div>


</template>

<script>

export default{
    name: 'user_info',
    

  data: ()=>{
    return {
      usuario: 
        {
          nome:'Cláudio Possani ',
          endereco: 'Rua dos bobos, 0',
          celular: '(16) 9562-54684',
          email: 'superpossani@gmail.com',
        },

      
      profileImage: require('@/assets/icones/Profile_avatar_placeholder_large.png'),

    }
  }
}

</script>


<style scoped>

li{
    font-weight: 500;
    font-size:x-large;
}

b{

    font-weight: 400;
    font-size:large;
}

#profPic{
    border-radius: 50%;
    width: 280px;    
}

#changePic{
    color:black;
}

#datalist{
    text-align: left;
}

</style>