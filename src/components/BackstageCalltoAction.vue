<script setup>

</script>

<template>
    <section class="backstage-actioncall">
        <div class="backstage-actioncall__container container">
            <h2 class="backstage-actioncall__title">¿CÓMO SE REALIZÓ MONTE?</h2>
            <p class="backstage-actioncall__description">CONOCÉ TODO EL TRABAJO HECHO PARA LLEGAR A TU PANTALLA</p>
            <button class="btn">VER EL DETRÁS DE ESCENA</button>
        </div>

    </section>
</template>

<style lang="sass" scoped>
@use "@/style/colors"
@use "@/style/fonts"
@use "@/style/mixins"
@use "@/style/variables"

section.backstage-actioncall
    padding-block: calc(variables.$section-gap * 5)
    background-color: colors.$light
    h2
        font-weight: fonts.$font-bold
        line-height: 1
    p
        margin-bottom: 2rem
</style>