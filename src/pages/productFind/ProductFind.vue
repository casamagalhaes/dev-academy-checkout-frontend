<template>
    <div class="product-detail">
        <div class="general-info">
            <h3 class="name">Nome: {{ product.name }}</h3>
            <h3 class="brand">Marca: {{ product.brand }}</h3>
            <h3 class="description">Descrição:{{ product.description }}</h3>
            <h3 class="price">Preço: {{product.price}}</h3>
            <div>
                <router-link to="/">
                    <button class="back-to-home">Voltar</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('products')
export default {
    name: 'ProductInfo',
    computed: {
        ...mapState(['product'])    
    },
    created() {
        this.getProductById({ productId: this.$route.params.id });
    },
    methods: {
        ...mapActions(['getProductById'])
    }
}
</script>

<style lang="stylus" scoped>
.product-detail
    width 40%
    height 40%
    display flex
    padding 10px 20px
    justify-content center
    background white
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
.name
    margin 0
    font-size 2rem
.brand
    margin 0
    font-size 1.5rem
    font-weight 500
.description
    margin 10px 0 0
    font-size 1rem
.general-info
    width 100%
    margin-bottom 30px
.price
    width 100%
    display inline-flex
    justify-content center
    color red
.back-button
    width 100%
    height 50px
    border-radius 4px
    border 2px solid #bbb
    background-color white
    color #444
    font-size 1rem
    &:focus
        outline 0
@media screen and (min-width 600px)
    .product
        display flex
        align-items center
        justify-content center
    .price
        width 150px
    
    .general-info
        margin-bottom 0
</style>