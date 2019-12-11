<template>
    <div class="product-list-item">
        <div class="general-info">
            <h3 class="name">{{ product.name }}</h3>
            <p class="description">{{ product.description }}</p>
        </div>
        <div class="quantity-controls">
            <button class="decrease" @click="decreaseProductQuantity(product.id)">-</button>
            <p class="quantity">{{ product.quantity }}</p>
            <button class="increase" @click="increaseProductQuantity(product.id)">+</button>
        </div>
        <div class="sub-total">
            <p>
                {{ productTotalPrice | toMoney }}
            </p>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapMutations } = createNamespacedHelpers('products')

export default {
    name: 'HomeProductListItem',
    props: {
        product: Object
    },
    computed: {
        productTotalPrice() {
            return (this.product.price * (this.product.quantity || 1))
        }
    },
    methods: {
        ...mapMutations(['increaseProductQuantity', 'decreaseProductQuantity'])
    }
}
</script>

<style lang="stylus" scoped>
.product-list-item
    padding 10px 20px
    text-align left 

.name
    margin 0
    font-size 16px

.description
    margin 10px 0 0
    font-size 14px
    color #7d7d7d

.general-info
    width 100%
    margin-bottom 30px

.quantity-controls
    display inline-flex
    width 50%
    align-items center

    .quantity
        min-width 40px
        text-align center
        // margin 0 12px

    button
        // font-size 1rem
        font-weight 600
        color #fff
        width 32px
        height 24px
        line-height 24px
        font-size 24px
        border-radius 4px

        &:focus
            outline 0

    .increase, .decrease
        border 1px solid #94c6da
        background-color #94c6da

.sub-total
    width 50%
    display inline-flex
    justify-content flex-end

@media screen and (min-width 600px) and (max-width 750px), screen and (min-width 1000px)
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