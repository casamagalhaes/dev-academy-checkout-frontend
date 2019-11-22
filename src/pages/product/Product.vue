<template>
  <div class="checkout">
    <h2 class="title">
      Cadastrar Produto -
      <a href="/">Voltar</a>
    </h2>
    <form @submit.prevent="saveProduct">
      <div class="form-group">
        <label for="name-product">Nome do produto</label>
        <input type="text" v-model="form.name" id="name-product" required />
      </div>
      <div class="form-group">
        <label for="description">Descrição do produto</label>
        <input type="text" v-model="form.description" id="description" required />
      </div>
      <div class="form-group">
        <label for="description">Preço</label>
        <input type="text" v-model="form.price" id="description" required />
      </div>
      <div class="form-group">
        <label for="brand">Marca</label>
        <input type="text" v-model="form.brand" id="brand" required />
      </div>
      <div class="button-container">
        <button class="submit-button">Cadastrar</button>
      </div>
    </form>

    <loading v-if="isLoading" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { Loading } from "@/components";

const { mapState, mapActions } = createNamespacedHelpers("products");

export default {
  name: "Product",
  components: {
    Loading
  },
  computed: {
    ...mapState({
      form: "productForm",
      isLoading: "isLoading"
    })
  },
  methods: {
    ...mapActions(["saveProduct"])
  }
};
</script>

<style lang="stylus" scoped>
.checkout {
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

@media screen and (min-width: 650px) {
  .checkout {
    width: 60%;
  }
}

@media screen and (min-width: 900px) {
  .checkout {
    width: 50%;
  }
}

@media screen and (min-width: 1200px) {
  .checkout {
    width: 35%;
  }
}
</style>