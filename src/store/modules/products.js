import shop from '@/api/shop'

export default {
    namespaced: true,
    state: {
        products: []
    },
    getters: {
        availableProducts (state, getters) {
            return state.products.filter(product => product.inventory > 0);
        },
        // if not using a module cartProducts and cartTotal will sit here 
        // instead of in cart.js
        productIsInStock () {
            return (product) => {
                return product.inventory > 0;
            }
        }
    },
    actions: {
        fetchProducts ({commit}) {
            return new Promise((resolve, reject) => {
                shop.getProducts(products => {
                    commit('setProducts', products);
                    resolve();
                })
            })
        }
    },
    mutations: {
        setProducts (state, products /*payloads*/) {
            state.products = products
        },
        decrementProductInventory (state, product) {
            product.inventory--;
        }   
    }
}