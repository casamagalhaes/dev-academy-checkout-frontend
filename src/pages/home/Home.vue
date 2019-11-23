<template>
  <div>
    <div class="header">
      <home-header />
    </div>
    <div class="body">
      <home-product-list class="product-list" />
      <home-payment-summary class="payment-summary" />
    </div>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader";
import HomeProductList from "./components/HomeProductList";
import HomePaymentSummary from "./components/HomePaymentSummary";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeProductList,
    HomePaymentSummary
  }
};
</script>

<style lang="stylus">
.body {
  width: 100%;
}

@media screen and (min-width: 950px) {
  .body {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .product-list {
    margin-right: 2%;
  }
}

@media screen and (min-width: 1300px) {
  .body {
    display: flex;
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

