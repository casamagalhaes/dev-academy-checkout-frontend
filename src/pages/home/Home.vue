<template>
    <div class="home">
        <home-product-list class="product-list" />
        <home-payment-summary class="payment-summary" />
        <home-product-add class="product-add"/>
    </div>
</template>

<script>
import HomeProductList from "./components/HomeProductList";
import HomePaymentSummary from "./components/HomePaymentSummary";
import HomeProductAdd from "./components/HomeProductAdd";

export default {
    name: "Home",
    components: {
        HomeProductList,
        HomePaymentSummary,
        HomeProductAdd
    }
};
</script>

<style lang="stylus">
.home
    width 100%

@media screen and (max-width: 950px)
    .product-add
        width 100%
        margin-top -133px
    .payment-summary
        margin-top 52px

@media screen and (min-width: 950px)
    .home
        display flex
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)

    .product-list
        margin-right  2%

    .product-add
        width 37.5em
        left 18.8em

@media screen and (min-width: 1300px)
    .home
        display flex
        width 70%
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)

</style>
