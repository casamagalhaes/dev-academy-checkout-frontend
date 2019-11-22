<template>
    <div class="home">
        <div class="nav">
            <a href="/product">Cadastrar Produtos</a>
        </div>
        <home-product-list class="product-list" />
        <home-payment-summary class="payment-summary" />
    </div>
</template>

<script>
import HomeProductList from "./components/HomeProductList";
import HomePaymentSummary from "./components/HomePaymentSummary";
// import HomeProductGetById from "./components/HomeProductGetById"; 

export default {
    name: "Home",
    components: {
        HomeProductList,
        HomePaymentSummary
        // HomeProductGetById
    }
};
</script>

<style lang="stylus">
.home
    width 100%
    
a
    padding 5px
    display block
    background white
    margin 5px
    border-radius 5px
    width: 100px
    text-decoration: none
    transition all 0.3s
    color: black

    &:hover
        background darken(white, 20%)

@media screen and (min-width: 950px)
    .home
        display flex
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)

    .product-list
        margin-right  2%

@media screen and (min-width: 1300px)
    .home
        display flex
        width 70%
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)

</style>
