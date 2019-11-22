<template>
  <div class="checkout">
    <h2 class="title">Adicionar Produto</h2>
    <form @submit.prevent="salvarProduto">
      <div class="form-group">
        <label for="product-name">Nome do produto</label>
        <input type="text" id="product-name" v-model="product.name" />
      </div>
      <div class="form-group">
        <label for="product-brand">Brand</label>
        <input type="text" id="product-brand" v-model="product.brand" />
      </div>
      <div class="form-group">
        <label for="product-description">Descrição</label>
        <input type="text" id="product-description" v-model="product.description" />
      </div>
      <div class="form-group">
        <label for="product-price">Preço</label>
        <input type="text" id="product-price" v-model="product.price" />
      </div>
      <div class="button-container">
        <button class="submit-button">Adicionar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("products");

export default {
  name: "ProductAddForm",
  computed: {
    ...mapState(["product"])
  },
  methods: {
    ...mapActions(["saveProduct"]),
    salvarProduto() {
      this.saveProduct();
      this.$router.push("/");
    }
  }
};
</script>

<style lang="stylus" scoped>
.checkout {
  padding: 0 20px;
  width: 50%;
  height: 550px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 4px;
}

.title {
  text-align: left;
}

.form-group {
  width: 100%;
  text-align: left;
  margin-bottom: 20px;

  label {
    display: block;
    margin: 10px 0;
  }

  input, select {
    width: 100%;
    height: 32px;
    border: 2px solid #eee;
    border-radius: 4px;
    background-color: #fff;
    padding: 1px 0;
    box-sizing: content-box;
  }
}

.expiration-date {
  .input-group {
    display: flex;
    justify-content: space-between;

    select {
      width: 48%;
    }
  }
}

.form-group-inline {
  display: flex;
}

.button-container {
  position: absolute;
  width: calc(100% - 38px);
  bottom: 20px;
}

.submit-button {
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border: 2px solid #eee;
  background-color: #edeef2;
  font-size: 1rem;

  &:focus {
    outline: 0;
  }
}
</style>
