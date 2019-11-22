<template>
    <div>
        <transition name="info">
            <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                <div class="modal-header">
                    <slot name="header">
                        <h3>Detalhes do produto</h3>
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        <h4><b>Nome: </b> {{product.name}} </h4>
                        <h4><b>Marca: </b> {{product.brand}} </h4>
                        <h4><b>Descrição: </b> {{product.description}} </h4> 
                        <h4><b>Preço: </b> {{product.price}} </h4> 
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                        <button class="modal-button" @click="$emit('close')">
                            Fechar
                        </button>
                    </slot>
                </div>
                </div>
            </div>
            <loading v-if="isLoading"/>
            </div>
        </transition>
    </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'
import { Loading } from '@/components'

const { mapState, mapActions } = createNamespacedHelpers('products')


export default {
    name:"info",
    components:{
        Loading
    },
    computed: {
        ...mapState({
            product: 'product',
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
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;


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