<template>

<div class="container">

    <div class="row">
        <div class="col border">

                <p>Nome:   <b>{{usuario.nome}}</b> </p>
                <p>Endereço:   <b>{{usuario.endereco}}</b> </p>
                <p>Celular:   <b>{{usuario.celular}}</b> </p>
                <p>Email:  <b>{{usuario.email}}</b> </p>
        </div>
        <div class="col">

            <div class="col offset-2">
          <button id="removeItem" type="button" class="btn btn-light">Remover</button> <br>
                    <img class="img-fluid" id="trash-icon" :src="trashIcon"/>

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
          endereco: 'R$ 120.00',
          celular: '(16) 9562-54684',
          email: 'superpossani@gmail.com',
        },

      
      profileImage: require('@/assets/Profile_avatar_placeholder_large.png'),

    }
  }
}

</script>


<style scoped>

p{
    font-weight: 500;
    font-size:x-large;
}

b{

    font-weight: 400;
    font-size:large;
}

#profPic{
    border-radius: 50%;
    width: 30%;    
}

#changePic{
    color:black

}

</style>