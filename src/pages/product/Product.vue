<template>
  <div class="checkout">
    <h2 class="title">Gestão de produto</h2>
    <form @submit.prevent="saveProduct">
      <div class="form-group">
        <label for="name">Nome do produto</label>
        <input type="text" class="name" v-model="product.name" required />
      </div>
      <div class="form-group">
        <label for="brand">Marca</label>
        <input type="text" class="brand" v-model="product.brand" required />
      </div>
      <div class="form-group">
        <label for="description">Descrição</label>
        <input type="text" class="description" v-model="product.description" required />
      </div>
      <div class="form-group">
        <label for="price">Preço</label>
        <money type="text" class="price" v-bind="money" v-model="product.price"></money>
      </div>
      <div class="button-container">
        <button class="submit-button">Salvar</button>
        <router-link to="/">
          <button class="back-button">Voltar</button>
        </router-link>
      </div>
    </form>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import { Money } from "v-money";
const { mapState, mapActions } = createNamespacedHelpers("product");

export default {
  name: "product",
  components: {
    Money
  },
  props: {
    Product: Object
  },
  mounted() {
    if (this.$route.params.id === undefined) return console.log("novo produto");
    else return console.log("produto id: " + this.$route.params.id);
  },
  computed: {
    ...mapState(["product"])
  },
  methods: {
    ...mapActions(["saveProduct"])
  },

  data() {
    return {
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "$ ",
        suffix: "",
        precision: 2,
        masked: false /* doesn't work with directive */
      }
    };
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

  input {
    width: 100%;
    height: 32px;
    border: 2px solid #eee;
    border-radius: 4px;
    background-color: #fff;
    padding: 1px 0;
    box-sizing: content-box;
  }
}

.button-container {
  position: absolute;
  width: calc(100% - 38px);
  bottom: 10px;
}

.submit-button {
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border: 2px solid #eee;
  background-color: #4AAE9B;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: 0;
  }
}

.back-button {
  width: 100%;
  height: 50px;
  border-radius: 4px;
  margin-top: 10px;
  border: 2px solid #eee;
  background-color: #edeef2;
  font-size: 1rem;

  &:focus {
    outline: 0;
  }
}
</style>
