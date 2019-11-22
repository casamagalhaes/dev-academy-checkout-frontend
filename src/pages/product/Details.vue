<template>
  <div class="checkout">
    <h2 class="title">
      Detalhes do Produto -
      <a href="/">Voltar</a>
    </h2>
    <div class="product-list-container">
      <div class="general-info">
        <h3 class="name">{{ product.name }}</h3>
        <h4 class="brand">{{ product.brand }}</h4>
        <p class="description">{{ product.description }}</p>
        <h4 class="price">{{ product.price | toMoney }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("products");

export default {
  name: "Details",
  computed: {
    ...mapState(["product"])
  },
  created() {
    this.fetchByIdProduct({ id: this.$route.params.id });
  },
  methods: {
    ...mapActions(["fetchByIdProduct"])
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

.product-list-item {
  padding: 10px 20px;
  text-align: left;
}

.name {
  margin: 0;
  font-size: 1rem;
}

.brand {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
}

.description {
  margin: 5px 0;
  font-size: 1rem;
}

.general-info {
  width: 100%;
  margin-bottom: 30px;
}

.title {
  text-align: left;
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