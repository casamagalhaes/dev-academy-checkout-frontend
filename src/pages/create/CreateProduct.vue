<template>
  <div class="create">
    <h2 class="title">Cadastro de Produtos</h2>
    <form @submit.prevent="pathToCreateProduct">
      <div class="form-group-create-product">
        <label for="product-name">Nome do Produto</label>
        <input type="text" id="product-name" required />
      </div>
      <div class="form-group-create-product">
        <label for="product-brand">Brand</label>
        <input type="text" id="product-brand" required />
      </div>
      <div class="form-group-create-product">
        <label for="product-description">Descrição</label>
        <input type="text" id="product-description" required />
      </div>
      <div class="form-group-create-product">
        <label for="product-price">Preço</label>
        <input type="number" id="product-price" required />
      </div>
      <div class="buttons">
        <div class="button-container-create">
          <button class="submit-button">Cadastrar</button>
        </div>
        <div class="button-container">
          <router-link to="/">
            <button class="submit-button">voltar</button>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Cadastro"
};
</script>

<style lang="stylus" scoped>
.create {
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

.buttons {
  flex-direction: row;
}

.form-group-create-product {
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
  bottom: 20px;
}

.submit-button {
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
  .create {
    width: 60%;
  }
}

@media screen and (min-width: 900px) {
  .create {
    width: 50%;
  }
}

@media screen and (min-width: 1200px) {
  .create {
    width: 35%;
  }
}
</style>