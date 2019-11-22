<template>
  <div class="product-details">
    <h2 class="title">
      <router-link to="/">
        <span class="back-button">‹</span>
      </router-link>Detalhes Do Produto
    </h2>

    <div class="product-details-item">
      <label class="label">Nome</label>
      <span class="content">{{ product.name }}</span>
    </div>
    <div class="product-details-item">
      <label class="label">Description</label>
      <span class="content">{{ product.description }}</span>
    </div>
    <div class="product-details-item">
      <label class="label">Price</label>
      <span class="content">{{ product.price }}</span>
    </div>
    <div class="product-details-item">
      <label class="label">Marca</label>
      <span class="content">{{ product.brand }}</span>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("products");

export default {
  name: "ProductDetails",
  computed: {
    ...mapState(["productForm", "product"])
  },
  created() {
    this.productForm.id = this.$route.params.productId;
  },
  mounted() {
    this.fetchProductById(this.productForm.id);
  },
  methods: {
    ...mapActions(["fetchProductById"])
  }
};
</script>

<style lang="stylus">
.product-details {
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

.product-details .product-details-item {
  float: left;
  height: auto;
  margin: 10px;
  width: 100%;
}

.product-details .product-details-item .label {
  float: left;
  font-weight: 700;
}

.product-details .product-details-item .content {
  float: left;
  margin: 5px 0;
  text-align: left;
  width: 100%;
}

.title {
  text-align: left;
}

@media screen and (min-width: 650px) {
  .product-details {
    width: 60%;
  }
}

@media screen and (min-width: 900px) {
  .product-details {
    width: 50%;
  }
}

@media screen and (min-width: 1200px) {
  .product-details {
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