<template>
  <div class="checkout">
    <h2 class="title">Método de pagamento</h2>
    <form @submit.prevent="saveSale">
      <div class="form-group">
        <label for="card-number">Número do cartão</label>
        <input type="text" id="card-number" v-model="form.cardNumber" />
      </div>
      <div class="form-group">
        <label for="card-holher">Nome do titular</label>
        <input type="text" id="card-holder" v-model="form.cardHolder" />
      </div>
      <div class="form-group-inline">
        <div class="form-group expiration-date">
          <label for="expiration-month">Data de validade</label>
          <div class="input-group">
            <select v-model="form.expirationMonth">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select v-model="form.expirationYear">
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="cvv-code">Código de segurança</label>
        <input type="text" id="cvv-code" v-model="form.cvvCode" />
      </div>
      <div class="button-container">
        <button class="submit-button">Pagar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("checkout");

export default {
  name: "Checkout",
  computed: {
    ...mapState({
      form: "creditCardForm"
    })
  },
  methods: {
    ...mapActions(["saveSale"])
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
