import {createStore} from 'vuex'

function updateLocalStorage(str, item) {
    localStorage.setItem(str, JSON.stringify(item))
}

export default createStore({
    state: {
        cart: [],
        user: {}
    },
    getters: {
        cartItems: state => {
            return state.cart
        },
        cartPrice: state => {
            let soma = 0
            for (let i = 0; i < state.cart.length; i++) {
                soma += state.cart[i].price
            }
            return soma;
        },
        userLogged: state => {
            return state.user
        }
    },
    mutations: {
        addToCart(state, product) {
            let item = state.cart.find(i => i.nome === product.nome)

            if (item) {
                alert("PRODUTO JÁ INSERIDO! A LICENÇA É GERADA PARA UM ÚNICO PRODUTO")
            }
            else {
                state.cart.push(product)
            }
            updateLocalStorage('cart', state.cart)
        },
        removeFromCart(state, product) {
            let item = state.cart.find(i => i.name === product.name) 

            if (item) {
                state.cart = state.cart.filter(i => i.name !== product.name)
            }

            updateLocalStorage('cart', state.cart)
        },
        signInUser: async function(state, info) {
            try {
                    let route = "http://localhost:3000/store/"+ info.email
                    console.log(route)
                    let resp = await fetch(route);	
                    resp = await resp.json();
                    if (resp[0].password === info.password) {
                        state.user = resp[0]
                        updateLocalStorage('user', state.user)
                    } else {
                        alert('SENHA INCORRETA! TENTE NOVAMENTE')
                    }
                }
                catch (e) {console.log("Usuario inexistente")}
        },
        signOutUser(state) {
            state.user.active = false
            updateLocalStorage('user', state.user)
        }
    }
})