<template>
  <div class="detail">
    <h2 class="title">Detalhes do Produto</h2>
    <div>
      <div class="form-group-detail-product">
        <label for="product-name">Nome do Produto</label>
        <p>Nome do Produto</p>
      </div>
      <div class="form-group-detail-product">
        <label for="product-brand">Brand</label>
        <p>Brand</p>
      </div>
      <div class="form-group-detail-product">
        <label for="product-description">Descrição</label>
        <p>Descrição</p>
      </div>
      <div class="form-group-detail-product">
        <label for="product-price">Preço</label>
        <p>Preço</p>
      </div>
      <div class="button-container">
        <router-link to="/">
          <button class="back-button">Voltar</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailProduct",
  props: {
    product: Object
  }
};
</script>

<style lang="stylus" scoped>
.detail {
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
  text-align: center;
}

.form-group-detail-product {
  width: 100%;
  text-align: left;
  margin-bottom: 20px;

  label {
    display: block;
    margin: 10px 0;
  }

  p {
    width: 100%;
    height: 32px;
    border: 2px solid #eee;
    border-radius: 4px;
    background-color: #A9A9A9;
    padding: 1px 0;
    box-sizing: content-box;
  }
}

.button-container {
  position: absolute;
  width: calc(100% - 38px);
  bottom: 20px;
}

.back-button {
  width: 30%;
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
  .detail {
    width: 60%;
  }
}

@media screen and (min-width: 900px) {
  .detail {
    width: 50%;
  }
}

@media screen and (min-width: 1200px) {
  .detail {
    width: 35%;
  }
}
</style>