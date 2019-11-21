<template>
    <div class="home">
        <home-product-list class="product-list" />
        <home-payment-summary class="payment-summary" />
    </div>
</template>

<script>
import HomeProductList from "./components/HomeProductList";
import HomePaymentSummary from "./components/HomePaymentSummary";

export default {
    name: "Home",
    components: {
        HomeProductList,
        HomePaymentSummary
    }
};
</script>

<style lang="stylus">
.home
    display flex
    flex-direction column
    align-items center
    margin-top 16px

.product-list
    // display none
    margin-bottom 16px

@media screen and (min-width: 750px)
    .home
        display flex
        flex-direction initial
        align-items initial
        justify-content  center

        > *
            margin 5px

@media screen and (min-width: 1200px)
    .home
        width 1200px
        margin 16px auto
        // top 20%
        // left 50%
        // position absolute
        // transform translate(-50%, -20%)

</style>
