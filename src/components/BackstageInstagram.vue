<script setup>
import InstagramIcon from '@/assets/icons/InstagramIcon.vue';


</script>
<template>
    <section class="callto-ig">
        <div class="callto-ig__container container">
            <div src="" alt="" class="callto-ig__thumb"></div>
            <div class="callto-ig__text">
                <h5>EL BACKSTAGE</h5>
                <h3>CUANDO LAS CÁMARAS SE APAGAN</h3>
                <p>Conocé el proceso completo detrás de Monte: desde la idea inicial hasta cada detalle del rodaje. Mirá entrevistas con los actores, los desafíos de cada área y todos esos datos que no ves en pantalla. Descubrí el otro lado de la historia y seguí el backstage en nuestro Instagram.</p>
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
        font-weight: fonts.$font-semibold
        color: colors.$accent-light-1
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
.callto-ig__thumb
    border-radius: 12px
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2)
    transition: box-shadow 0.3s
    width: 100%
    max-width: 450px
    height: 300px
    width: 45%
    background-color: colors.$accent
    background: url('@/assets/images/instagram-monte.png') no-repeat center center
    background-size: cover
    background-position: top
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
        .callto-ig__thumb
            width: 100%
            max-width: none
        .instagram__link
            margin: 0 auto
            justify-content: center
</style>