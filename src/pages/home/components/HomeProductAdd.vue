<template>
    <div class="button-add-container">
        <router-link to="/product">
            <button class="add-product-button">Adicionar Produto</button>
        </router-link>
    </div>
</template>

<style lang="stylus">
.button-add-container
    position absolute
    width 100%
    bottom 20px
    top 102%
    left 50%
    transform translate(-50%, -50%)

.add-product-button
    width 100%
    height 50px
    border-radius 4px
    border 1px solid #eee
    background-color #3CB371
    color white
    font-size 1rem
    

    &:focus
        outline 0
</style>