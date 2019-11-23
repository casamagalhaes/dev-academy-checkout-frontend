<template>
  <div class="home-header">
    <h1 class="title">Ponto de Venda</h1>
    <router-link to="/product">
      <button type="button" class="new-product-button">Cadastrar Produto</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "homeHeader",
  components: {}
};
</script>

<style lang="stylus" scoped>
.home-header {
  display: flex;
  justify-content: left;
  align-items: center;
}

.title {
  margin-left: 20px;
  text-transform: uppercase;
  font-weight: bold;
}

.new-product-button {
  width: 200px;
  height: 50px;
  margin-left: 50px;
  border-radius: 4px;
  border: 1px solid #eee;
  background-color: #4AAE9B;
  color: #FFF;
  font-size: 1rem;

  &:focus {
    outline: 0;
  }
}
</style>