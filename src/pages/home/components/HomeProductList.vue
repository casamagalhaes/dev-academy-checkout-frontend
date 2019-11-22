<template>
    <div class="home-product-list">
        <div class="home-product-list-header">
            <h2 class="title">Produtos</h2>
            <router-link to="/create">
            <div class="home-product-list-button">Adicionar</div>
            </router-link>
        </div>
        <div class="product-list-container">
            <home-product-list-item class="product-item" v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import HomeProductListItem from './HomeProductListItem'

const { mapState, mapActions } = createNamespacedHelpers('products')

export default {
    name: 'HomeProductList',
    components: {
        HomeProductListItem
    },
    computed: {
        ...mapState(['products'])
    },
    created() {
        this.fetchAllProducts();
    },
    methods: {
        ...mapActions(['fetchAllProducts'])
    },
}
</script>

<style lang="stylus" scoped>
.home-product-list
    width 100%
    background-color #fff
    border-radius 4px

.home-product-list-header
    display flex
    justify-content space-between
    align-items baseline

    a
        text-decoration none
        cursor pointer
        font-weight 300

.home-product-list-button
    padding 10px
    background-color #edeef2
    margin-right 5px;
    
    

.product-list-container
    max-height 60vh
    overflow-y auto

.title
    text-align left
    padding 0px 20px

.product-item + .product-item
    border-top 1px solid #e6e6e6

</style>