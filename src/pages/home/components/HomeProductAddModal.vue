<template>
    <div>
        <transition name="modal">
            <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                
                <div class="modal-header">
                    <slot name="header">
                        Adicionar produto
                    </slot>
                </div>
                <form @submit.prevent="saveProduct">

                    <div class="modal-body">
                        <slot name="body">
                            <input type="text" v-model="form.name" class="entrada" placeholder="Nome do produto" required>
                            <input type="text" v-model="form.brand" class="entrada" placeholder="Marca" required>
                            <input type="text" v-model="form.description" class="entrada" placeholder="Descrição" required>
                            <input type="text" v-model="form.price" class="entrada" placeholder="Preço" required>
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="modal-button">
                                Adicionar
                            </button>
                            <button class="modal-button" @click="$emit('close')">
                                Cancelar
                            </button>
                        </slot>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </transition>
        <loading v-if="isLoading"/>
    </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'
import { Loading } from '@/components'

const { mapState, mapActions } = createNamespacedHelpers('products')


export default {
    name:"modal",
    components:{
        Loading
    },
    computed: {
        ...mapState({
            form: 'productForm',
            isLoading: 'isLoading'
        })
    },
    methods: {
        ...mapActions(['saveProduct'])
    }
}
</script>

<style lang="stylus">
.modal-mask 
  position: absolute;
  z-index: 9998;
  top: -50px;
  left: 0;
  width: 100%;
  height: 500px;
  background-color: rgba(0, 0, 0, .3);
  display: table;
  transition: opacity .3s ease;
  border-radius: 12px

.entrada
    padding: 12px 20px;
    margin: 12px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

.modal-wrapper 
  display: table-cell;
  vertical-align: middle;


.modal-container 
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;


.modal-header h3 
  margin-top: 0;
  color: #42b983;


.modal-body 
  margin: 20px 0;


.modal-button 
    width 40%
    height 50px
    border-radius 4px
    border 2px solid #eee
    background-color #edeef2
    font-size 1rem
    margin 3px

    &:focus
        outline 0

    cursor pointer

.modal-button:hover
    background-color #94c6da


.modal-enter 
  opacity: 0;


.modal-leave-active 
  opacity: 0;


.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform: scale(1.1);
  transform: scale(1.1);

</style>