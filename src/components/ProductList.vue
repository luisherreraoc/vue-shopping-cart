<template>
    <div>
        <h1>Product List</h1>
        <img
          v-if="loading"
          src="https://zippy.gfycat.com/SkinnySeveralAsianlion.gif"
        >
        <ul v-else>
            <li v-for="product in products" :key="product.id">
                {{ product.title }} - {{ product.price | currency }} - {{ product.inventory }}
                <button @click="addProductToCart(product)"
                        :disabled="!productIsInStock(product)">
                    Add to cart
                </button>
            </li>
        </ul>    
    </div>
</template>

<script>

import {mapState, mapGetters, mapActions} from 'vuex'

export default {
    data () {
        return {
            loading: false
        }
    },
    computed: {
        /// ES7 spread operator
        ...mapState('products', {
            products: state => state.products
        }),
        ...mapGetters('products', {
            productIsInStock: 'productIsInStock'
        })
    },
    methods: {
        ...mapActions({
            fetchProducts: 'products/fetchProducts',
            addProductToCart: 'cart/addProductToCart'
        })
    },
    created () {
        this.loading = true;
        // this.$store.dispatch('fetchProducts' /* payload if any */)
        this.fetchProducts()
        .then(() => this.loading = false)
    }
}
</script>

<style scoped>
    img {
        width: 20px;
    }
</style>
