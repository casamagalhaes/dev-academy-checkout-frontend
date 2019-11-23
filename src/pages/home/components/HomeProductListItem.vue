<template>
  <div class="product-list-item">
    <div class="general-info">
      <div class="product-name-header">
        <h3 class="name">{{ product.name }}</h3>
        <router-link :to="{ name: 'productEdit', params: { id: product.id } }">
          <button class="product-name-header-button">ver detalhe</button>
        </router-link>
      </div>
      <h4 class="brand">Marca: {{ product.brand }}</h4>
      <p class="description">Descrição: {{ product.description }}</p>
    </div>
    <div class="quantity-controls">
      <button class="decrease" @click="decreaseProductQuantity(product.id)">-</button>
      <p class="quantity">{{ product.quantity }}</p>
      <button class="increase" @click="increaseProductQuantity(product.id)">+</button>
    </div>
    <div class="sub-total">
      <p>{{ productTotalPrice | toMoney }}</p>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("product");

export default {
  name: "HomeProductListItem",
  props: {
    product: Object
  },
  computed: {
    productTotalPrice() {
      return this.product.price * (this.product.quantity || 1);
    }
  },
  methods: {
    ...mapMutations(["decreaseProductQuantity", "increaseProductQuantity"])
  }
};
</script>

<style lang="stylus" scoped>
.product-name-header {
  display: flex;
  flex-direction: row;
}

.product-name-header-button {
  margin-left: 10px;
  border-radius: 4px;
  border: 1px solid #eee;
  background-color: #4AAE9B;
  color: #FFF;

  &:focus {
    outline: 0;
  }
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
  margin: 10px 0 0;
  font-size: 1rem;
}

.general-info {
  width: 100%;
  margin-bottom: 30px;
}

.quantity-controls {
  height: max-content;
  display: inline-flex;
  width: 50%;

  // justify-content flex-end
  .quantity {
    margin: 0 10px;
    font-size: 1rem;
    font-weight: 700;
  }

  button {
    border: none;
    font-size: 1rem;
    font-weight: 700;
    color: #94c6da;

    &:focus {
      outline: 0;
    }
  }
}

.sub-total {
  width: 50%;
  display: inline-flex;
  justify-content: flex-end;
}

@media screen and (min-width: 600px) {
  .product-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .quantity-controls {
    width: auto;
  }

  .sub-total {
    width: 150px;
  }

  .general-info {
    margin-bottom: 0;
  }
}
</style>
