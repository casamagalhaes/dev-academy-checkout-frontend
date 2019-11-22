<template>
    <div class="product">
        <h2 class="title">Adicionar Produto</h2>
        <form @submit.prevent="addProduct">
            <div class="form-group">
                <label for="name">Nome</label>
                <input type="text" v-model="form.name" id="name" required/>
            </div>
            <div class="form-group">
                <label for="description">Descrição</label>
                <input type="text" v-model="form.description" id="description" required/>
            </div>
            <div class="form-group">
                <label for="price">Preço</label>
                <input type="number" step="0.01" v-model="form.price" id="price" required/>
            </div>
            <div class="form-group">
                <label for="brand">Marca</label>
                <input type="text" v-model="form.brand" id="brand" required/>
            </div>
            <div class="button-container">
                <button class="submit-button">Adicionar</button>
            </div>
        </form>
        <div>
            <router-link to="/">
                <button class="back-button">Voltar</button>
            </router-link>
        </div>

        <loading v-if="isLoading" />
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { Loading } from '@/components'

const { mapState, mapActions } = createNamespacedHelpers('products')

export default {
    name: 'Product',
    components: {
        Loading
    },
    computed: {
        ...mapState({
            form: 'productForm',
            isLoading: 'isLoading'
        })
    },
    methods: {
        ...mapActions(['addProduct']),
    }
}
</script>

<style lang="stylus" scoped>
.product
    padding 0 20px
    width 80%
    height 550px
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    background-color #fff
    border-radius 4px

.title
    text-align left

.form-group
    width 100%
    text-align left
    margin-bottom 20px

    label
        display block
        margin 10px 0    

    input 
        width 100%
        height 32px
        border 2px solid #eee
        border-radius 4px
        background-color #fff
        padding 1px 0
        box-sizing content-box

.button-container
    position absolute
    width calc(100% - 38px) 
    bottom 20px

.submit-button
    width 100%
    height 50px
    border-radius 4px
    border 2px solid #eee
    background-color #3CB371
    color white
    font-size 1rem

    &:focus
        outline 0

.back-button
    width 100%
    height 50px
    border-radius 4px
    border 2px solid #bbb
    background-color white
    color #000
    font-size 1rem

    &:focus
        outline 0

@media screen and (min-width: 650px)
    .product
        width 60%

@media screen and (min-width: 900px)
    .product
        width 50%

@media screen and (min-width: 1200px)
    .product
        width 35%
</style>