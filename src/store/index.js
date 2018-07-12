import Vuex from 'vuex'
import Vue from 'vue'
// import shop from '@/api/shop' << no longer needed here if we create a file for actions
import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        products
    },
    state: { // same as data
        // if not using a module:        
        // products: []
        // cart: [],
        // checkoutStatus: null
    },
    getters: { // sames as computed properties

        // if not using a module availableProducts and productIsInStock
        // will sit here instead of instead of in products.js

    },
    actions: actions, //or just actions,
    //     //same as methods
    //     // call the mutations that sets the states
    //     // they can be complex, but never update a state

    // right now exported to a different file, actions.js, but could be here as well

    mutations: { //set and update the state
        // keep them as simple as possible
        // only responsible to update a piece of the state

        // if not using a module setProducts and decrementProductInventory
        // will sit here instead of in products.js

        // if not using a module pushProductToCart, incrementItemQuantity, 
        // setCheckoutStatus and emptyCart will sit here instead of in cart.js

    }
})