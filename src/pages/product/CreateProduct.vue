<template>
  <div class="product-form">
    <h2 class="title">
      <router-link to="/">
        <span class="back-button">‹</span>
      </router-link>Novo Produto
    </h2>

    <form @submit.prevent="createProduct">
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" v-model="form.name" id="name" required />
      </div>
      <div class="form-group">
        <label for="description">Descrição</label>
        <input type="text" v-model="form.description" id="description" required />
      </div>
      <div class="form-group">
        <label for="price">Preço</label>
        <input type="text" v-model="form.price" id="price" required />
      </div>
      <div class="form-group">
        <label for="brand">Marca</label>
        <input type="text" v-model="form.brand" id="brand" required />
      </div>
      <div class="button-container">
        <button class="submit-button">Criar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("products");

export default {
  name: "CreateProducts",
  computed: {
    ...mapState({
      form: "productForm"
    })
  },
  methods: {
    ...mapActions(["createProduct"])
  }
};
</script>

<style lang="stylus">
.product-form {
  padding: 0 20px;
  width: 80%;
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

@media screen and (min-width: 650px) {
  .product-form {
    width: 60%;
  }
}

@media screen and (min-width: 900px) {
  .product-form {
    width: 50%;
  }
}

@media screen and (min-width: 1200px) {
  .product-form {
    width: 35%;
  }
}

.back-button {
  padding-right: 10px;
}

a {
  color: #1e88e5;
  text-decoration: none;
}
</style>