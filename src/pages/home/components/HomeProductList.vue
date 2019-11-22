<template>
    <div class="home-product-list">
        <div class="head">
            <h2 class="title">Produtos</h2>
            <button class="button" id="show-modal" @click="showModal = true">+</button>
        </div>
        <div class="product-list-container">
            <home-product-list-item class="product-item" v-for="product in products" :key="product.id" :product="product" />
        </div>
        <HomeProductAddModal class="modal" v-if="showModal" @close="showModal = false"/>
    </div>

    
</template>


<script>
import { createNamespacedHelpers } from 'vuex'
import HomeProductListItem from './HomeProductListItem'
import HomeProductAddModal from './HomeProductAddModal'

const { mapState, mapActions } = createNamespacedHelpers('products')

export default {
    name: 'HomeProductList',
    components: {
        HomeProductListItem,
        HomeProductAddModal
    },
    data(){
        return{
            showModal: false
        }
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
.home-product-list 
    width 100%
    background-color #fff
    border-radius 4px

.product-list-container
    max-height 60vh
    overflow-y auto
    margin 70px 10px 10px 0px

.title
    float: left 
    text-align left
    padding 0px 20px
    
.button
    float right 
    margin 20px 20px
    border none
    font-size 1rem
    font-weight 700
    color #94c6da
    cursor pointer

.button:hover 
  background-color: #94c6da

.product-item + .product-item
    border-top 1px solid #e6e6e6

.head  
    position relative
    margin-bottom 10px
    display block

</style>