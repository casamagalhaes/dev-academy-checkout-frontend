<template>
    <div class="checkout">
        <h2 class="title">Método de pagamento</h2>
        <form @submit.prevent="saveSale">
            <div class="form-group">
                <label for="card-number">Número do cartão</label>
                <input type="text" v-model="form.cardNumber" id="card-number" required/>
            </div>
            <div class="form-group">
                <label for="card-holder">Nome do titular</label>
                <input type="text" v-model="form.cardHolder" id="card-holder" required/>
            </div>
            <div class="form-group-inline">
                <div class="form-group expiration-date">
                    <label for="expiration-month">Data de expiração</label>
                    <div class="input-group">
                        <select v-model="form.expirationMonth" id="expiration-month" required>
                            <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                        </select>
                        <select v-model="form.expirationYear" id="expiration-year" required>
                            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="cvv-code">Código de segurança</label>
                <input type="text" v-model="form.cvvCode" id="cvv-code" required/>
            </div>
            <div class="button-container">
                <button class="submit-button">Pagar</button>
            </div>
        </form>

        <loading v-if="isLoading" />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { Loading } from '@/components'

const { mapState, mapGetters, mapActions } = createNamespacedHelpers('checkout')

export default {
    name: 'Checkout',
    components: {
        Loading
    },
    computed: {
        ...mapGetters(['months', 'years']),
        ...mapState({
            form: 'creditCardForm',
            isLoading: 'isLoading'
        })
    },
    methods: {
        ...mapActions(['saveSale'])
    }
}
</script>

<style lang="stylus" scoped>
.checkout
    width 80%
    margin auto
    margin-top 16px
    border 1px solid #e6e6e6
    border-radius 4px

.title
    text-align left
    padding 12px 20px
    border-bottom 1px solid #e6e6e6

form
    padding 20px

.form-group
    width 100%
    text-align left
    margin-bottom 20px

    label
        display block
        margin 10px 0    

    input, select 
        width 100%
        height 32px
        border 2px solid #eee
        border-radius 4px
        background-color #fff
        padding 1px 0
        box-sizing content-box


.expiration-date
    .input-group
        display flex
        justify-content space-between

        select
            width 48%

.form-group-inline
    display flex

.button-container
    margin-top 33px

.submit-button
    width 100%
    height 50px
    border-radius 4px
    border 2px solid #eee
    background-color #edeef2
    font-size 1rem

    &:focus
        outline 0

@media screen and (min-width: 650px)
    .checkout
        width 60%

@media screen and (min-width: 900px)
    .checkout
        width 50%

@media screen and (min-width: 1200px)
    .checkout
        width 30%
</style>