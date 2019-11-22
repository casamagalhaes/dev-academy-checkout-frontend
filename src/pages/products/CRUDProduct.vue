<template>
    <div class="home">
        <create-product class="paymment-summary" />
        <product-list class="product-list" />
        
    </div>
</template>
<script>
import ProductList from "./component/ProductList";
import CreateProduct from "./CreateProduct";

export default {
    name: "CRUDProduct",
    components: {
        ProductList,
        CreateProduct
    }
};
</script>

<style lang="stylus">
.home
    width 200%
    
        display : flex
        flex-direction column

@media screen and (min-width: 950px)
    .home
        height 60%
        display flex
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)

    .product-list
        margin-right  2%

@media screen and (min-width: 1300px)
    .home
        height 60%
        display flex
        width 70%
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)

</style>