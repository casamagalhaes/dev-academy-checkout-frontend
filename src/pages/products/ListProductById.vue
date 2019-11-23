<template>
    <div class="home">
        Detalhes do Produto -
      <a href="/">Voltar</a>
        <product-list-item class="product-list-item"/>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import ProductListItem from './component/ProductListItem.vue'

const { mapActions } = createNamespacedHelpers('products')

export default {
    name: "Details",
    components:{
        ProductListItem
    },
  computed: {
    
  },
  methods: {
    ...mapActions(["getById"])
  }
}
</script>

<style lang="stylus" scoped>
.product-list-item
    padding 10px 20px
    text-align center

.name
    margin 0
    font-size 1rem

.brand
    margin 0
    font-size .9rem
    font-weight 500

.description
    margin 10px 0 0
    font-size 1rem

.general-info
    width 100%
    margin-bottom 30px

.quantity-controls
    height max-content
    display inline-flex
    width 50%
    // justify-content flex-end

    .quantity
        margin 0 10px
        font-size 1rem
        font-weight 700

    button
        border none
        font-size 1rem
        font-weight 700
        color #94c6da

        &:focus
            outline 0

.sub-total
    width 50%
    display inline-flex
    justify-content flex-end

@media screen and (min-width 600px)
    .product-list-item
        display flex
        align-items center
        justify-content space-between

    .quantity-controls
        width auto

    .sub-total
        width 150px
    
    .general-info
        margin-bottom 0
</style>