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
                <button @click="addProductToCart(product)">Add to cart</button>
            </li>
        </ul>    
    </div>
</template>

<script>

export default {
    data () {
        return {
            loading: false
        }
    },
    computed: {
        products () {
            return this.$store.getters.availableProducts;
        }
    },
    methods: {
        addProductToCart(product) {
            this.$store.dispatch('addProductToCart', product)
        }
    },
    created () {
        this.loading = true;
        this.$store.dispatch('fetchProducts' /* payload if any */)
        .then(() => this.loading = false)
    }
}
</script>

<style scoped>
    img {
        width: 20px;
    }
</style>
