<script setup>
import InstagramIcon from '@/assets/icons/InstagramIcon.vue';


</script>
<template>
    <section class="callto-ig">
        <div class="callto-ig__container container">
            <img src="" alt="" class="callto-ig__thumb">
            <div class="callto-ig__text">
                <h5>CONOCE TODO EL PROCESO DE MONTE</h5>
                <h3>EL BACKSTAGE</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ipsa iste temporibus ipsam omnis harum necessitatibus distinctio qui nesciunt natus porro voluptatibus enim rerum, ipsum soluta commodi quae error quasi.</p>
                <a href="https://www.instagram.com/monteserieweb/" target="_blank" class="instagram__link">
                    <label>ABRIR EN</label>
                    <InstagramIcon class="icon instagram__icon" />
                </a>
            </div>
        </div>
    </section>
</template>


<style lang="sass" scoped>
@use '@/style/colors'
@use '@/style/fonts'
@use '@/style/mixins'
@use '@/style/variables'

.callto-ig
section.callto-ig
    padding-block: calc(variables.$section-gap * 3)
    background-color: colors.$white
    color: colors.$dark-shadow
    .callto-ig__container
        @include mixins.flex(row, space-between, flex-start, nowrap)
        gap: 2rem
        text-align: left
.callto-ig__text
    width: 60%
    h5
        font-weight: fonts.$font-regular
    h3
        font-weight: fonts.$font-bold
        font-size: fonts.$font-xl
        line-height: 1
        margin-bottom: 2rem
    p
        margin-bottom: 1rem
    .instagram__link
        @include mixins.flex(row, flex-start, center, nowrap)
        label
            cursor: pointer
            font-weight: fonts.$font-semibold
            margin-right: 0.5rem
            padding-top: 6px
        &:hover .instagram__icon
            color: colors.$accent
        .instagram__icon
            transition: color 0.3s
            width: 32px
            height: 32px
            margin-left: 0.5rem
img.callto-ig__thumb
    border-radius: 12px
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2)
    transition: box-shadow 0.3s
    background-color: colors.$dark
    width: 100%
    max-width: 450px
    height: 300px
    object-fit: cover
    &:hover
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.4)
        transition: box-shadow 0.3s
@media (max-width: variables.$bkp-medium)
    section.callto-ig
        padding-block: calc(variables.$section-gap * 2)
        .callto-ig__container
            flex-direction: column
            text-align: center
            gap: 1rem
        .callto-ig__link
            justify-content: center
        .callto-ig__text
            width: 100%
            h3
                margin-bottom: 1rem
        img.callto-ig__thumb
            width: 100%
            max-width: none
        .instagram__link
            margin: 0 auto
            justify-content: center
</style>