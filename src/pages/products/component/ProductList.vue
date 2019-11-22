<template>
    <div class="product-list">
        <h2 class="title">Produtos</h2>
        
        
        <div class="product-list-container">
            <product-list-item class="product-item" v-for="product in products" :key="product.id" :product="product" />
        </div>

    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import ProductListItem from './ProductListItem'

const { mapState, mapActions } = createNamespacedHelpers('products')

export default {
    name: 'ProductList',
    components: {
        ProductListItem
    },
    computed: {
        ...mapState(['products'])
    },
    created() {
        this.fetchAllProducts();
    },
    methods: {
        ...mapActions(['fetchAllProducts']),
        ...mapActions(['getById'])
    },
}
</script>

<style lang="stylus" scoped>
.product-list
    margin: 20px
    width 60%
    background-color #fff
    border-radius 4px

.product-list-container
    max-height 60vh
    overflow-y auto

.title
    text-align left
    padding 0px 20px

.product-item + .product-item
    border-top 1px solid #e6e6e6

</style>