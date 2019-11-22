<template>
  <div class="checkout">
    <h2 class="title">Informações do produto</h2>
    <form @submit.prevent="() => {}">
      <div class="form-group">
        <label for="card-number">Nome do produto</label>
        <input type="text" :value="product.name" id="card-number" />
      </div>
      <div class="form-group">
        <label for="card-holder">Marca do produto</label>
        <input type="text" :value="product.brand" id="card-holder" />
      </div>
      <div class="form-group">
        <label for="cvv-code">Preço do produto</label>
        <input type="text" :value="product.price" id="cvv-code" />
      </div>
      <div class="form-group">
        <label for="cvv-code">Descrição do produto</label>
        <input type="text" :value="product.description" id="cvv-code" />
      </div>
      <div class="button-container">
        <button class="submit-button" type="button" @click="$router.go(-1)">
          Voltar
        </button>
      </div>
    </form>
    <Loading v-if="isLoading" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { Loading } from "@/components";

const { mapState, mapActions } = createNamespacedHelpers("products");

export default {
  name: "ProductInfo",
  components: {
    Loading
  },
  computed: {
    ...mapState({
      product: "productActive",
      isLoading: "isLoading"
    })
  },
  methods: {
    ...mapActions(["getProductById"])
  },
  created() {
    this.getProductById(this.$route.params.id);
  }
};
</script>

<style lang="stylus" scoped>
.checkout
    padding 0 20px
    width 80%
    height 550px
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    background-color #fff
    border-radius 4px

.title
    text-align left

.form-group
    width 100%
    text-align left
    margin-bottom 20px

    label
        display block
        margin 10px 0

    input, select
        width 100%
        height 32px
        border 2px solid #eee
        border-radius 4px
        background-color #fff
        padding 1px 0
        box-sizing content-box


.expiration-date
    .input-group
        display flex
        justify-content space-between

        select
            width 48%

.form-group-inline
    display flex

.button-container
    position absolute
    width calc(100% - 38px)
    bottom 20px

.submit-button
    width 100%
    height 50px
    border-radius 4px
    border 2px solid #eee
    background-color #edeef2
    font-size 1rem

    &:focus
        outline 0

@media screen and (min-width: 650px)
    .checkout
        width 60%

@media screen and (min-width: 900px)
    .checkout
        width 50%

@media screen and (min-width: 1200px)
    .checkout
        width 35%
</style>
