import {createStore} from 'vuex'

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
    state: {
        cart: []
    },
    getters: {
        cartItems: state => {
            return state.cart
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
            updateLocalStorage(state.cart)
        },
        removeFromCart(state, product) {
            let item = state.cart.find(i => i.name === product.name) 

            if (item) {
                state.cart = state.cart.filter(i => i.name !== product.name)
            }

            updateLocalStorage(state.cart)
        }
    }
})