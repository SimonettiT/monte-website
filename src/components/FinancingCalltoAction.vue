<script setup>
import PatreonsBackground from '@/assets/images/monte-rifa.png';

</script>

<template>
    <section class="financing-callto">
        <div class="financing-callto__container container" :style="{ backgroundImage: 'url(' + PatreonsBackground + ')' }">
            <div class="financing-callto__wrapper">
                <h3>¿CÓMO SE FINANCIÓ MONTE?</h3>
                <router-link to="/sponsors"class="btn">QUIENES LO HICIERON POSIBLE</router-link>
            </div>
        </div>
    </section>
</template>


<style lang="sass" scoped>
@use "@/style/colors"
@use "@/style/fonts"
@use "@/style/mixins"
@use "@/style/variables"
section.financing-callto
    padding-block: variables.$section-gap calc(variables.$section-gap * 3)
    background-color: colors.$white
    .financing-callto__container
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px
        background-size: cover
        background-position: center
        border-radius: 0 0 50px 0
        .financing-callto__wrapper
            @include mixins.flex(column, center, center, nowrap)
            width: 100%
            height: 100%
            backdrop-filter: brightness(70%) blur(1px)
            padding-block: 5rem
            border-radius: 0 0 50px 0
        h3
            font-size: fonts.$font-xl
            margin-bottom: 2rem
</style>