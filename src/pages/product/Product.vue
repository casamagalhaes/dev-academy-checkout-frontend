<template>
    <div class="product">
        <product-save/>
    </div>
</template>

<script>
import ProductSave from './components/ProductSave'

export default {
    name: 'Product',
    components: {
        ProductSave
    }
}
</script>

<style lang="stylus">
.product
    width 100%

@media screen and (min-width: 950px)
    .product
        display flex
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)

    .product-list
        margin-right  2%

@media screen and (min-width: 1300px)
    .product
        display flex
        width 70%
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)

</style>