<template>
    <div class="home-product-list">
        <h2 class="title">Produtos</h2>
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
    width 96%
    background-color #fff
    border 1px solid #e6e6e6
    border-radius 4px

.title
    text-align left
    padding 12px 20px
    border-bottom 1px solid #e6e6e6

.product-item + .product-item
    border-top 1px solid #e6e6e6

@media screen and (min-width: 1200px)
    .home-product-list
        max-height 641px
        overflow auto
        // margin 16px auto

</style>