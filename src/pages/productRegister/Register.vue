<template>
    <div class="productRegister">
        <h2 class="title">Cadastro de produto</h2>
        <form @submit.prevent="saveProduct">
            <div class="form-group">
                <label for="name">Nome do produto</label>
                <input type="text" v-model="form.name" id="name" />
            </div>
            <div class="form-group">
                <label for="description">Descrição</label>
                <input type="text" v-model="form.description" id="description" />
            </div>
            <div class="form-group">
                <label for="price">Preco</label>
                <input type="text" v-model="form.price" id="price" />
            </div>
            <div class="form-group">
                <label for="brand">Marca</label>
                <input type="text" v-model="form.brand" id="brand" />
            </div>
            <div class="button-container">
                <button class="submit-button">Cadastrar</button>
            </div>
        </form>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('register') 

export default {
    name: 'Register',
    computed: {
        ...mapState({
            form: 'productForm'
        })
    },
    methods: {
        ...mapActions(['saveProduct'])
    }
}
</script>

<style lang="stylus" scoped>
.productRegister
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

    input, select 
        width 100%
        height 32px
        border 2px solid #eee
        border-radius 4px
        background-color #fff
        padding 1px 0
        box-sizing content-box

.form-group-inline
    display flex

.button-container
    position absolute
    width calc(100% - 38px) 
    bottom 20px

.submit-button
    width 100%
    height 50px
    border-radius 4px
    border 2px solid #eee
    background-color #edeef2
    font-size 1rem

    &:focus
        outline 0
</style>