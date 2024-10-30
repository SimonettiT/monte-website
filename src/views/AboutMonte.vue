<script setup>
import ChaptersAccess from '@/components/ChaptersAccess.vue';
import CharacterDetails from '@/components/CharacterDetails.vue';
import SpotifyPlaylist from '@/components/SpotifyPlaylist.vue';
import SpotifyIcon from '@/assets/icons/SpotifyIcon.vue';
import InstagramIcon from '@/assets/icons/InstagramIcon.vue';
import YoutubeIcon from '@/assets/icons/YoutubeIcon.vue';

import AboutMonteBackground from '@/assets/images/about-monte-background.jpg';


</script>
<template>
    <main>
        <section class="about-cover">
            <h3>EL MUNDO DE</h3>
            <img class="header__monte-logo" src="../assets/images/logo-word-white.png" alt="">
            <h4>Proyecto Transmedia</h4>
        </section>

        <section class="about-synopsis">
            <div class="about-synopsis__container">
                <h5>SINOPSIS DE MONTE</h5>
                <h2>FRASE CATCHY</h2>
                <p>SINOPSIS DE MONTE MÁS DETALLADO. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sapiente, quaerat, reiciendis ab praesentium iusto quam vitae voluptate corporis dolore quis vel quidem dignissimos quia eaque excepturi sequi possimus beatae.</p>
    
                <div class="synopsis__redes">
                    <h5>CONOCE MÁS EN NUESTRAS REDES</h5>
                    <div class="synopsis__redes-icons">
                        <a href="https://www.instagram.com/monteserieweb/" alt="Instagram de Monte" target="_blank"><InstagramIcon class="synopsis__icon"/></a> 
                        <a href="" alt="YouTube de Monte" target="_blank"><YoutubeIcon class="synopsis__icon"/></a>
                        <a href="https://open.spotify.com/user/31ndonbd5qi234gbvo62qdco72zm?si=a6cb453281924f4a" alt="Spotify de Monte" target="_blank"><SpotifyIcon class="synopsis__icon"/></a>
                    </div>
                </div>
            </div>
        </section>

        <section class="mundo-monte" :style="{ backgroundImage: 'url(' + AboutMonteBackground + ')'}" >
            <div class="mundo-monte__container container">
                <div class="mundo-monte__item item-right">
                    <h3>FRASE CATCHY</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam aliquid cumque aspernatur est. Fugit ratione amet perspiciatis necessitatibus dignissimos nostrum est.</p>
                </div>

                <div class="mundo-monte__item item-center">
                    <h3>BIENVENIDO A LA FIESTA DE TU VIDA</h3>
                </div>
                
                <div class="mundo-monte__item item-center">
                    <h3>PERO NO TODO ES LO QUE PARECE SER</h3>
                </div>

                <div class="mundo-monte__item item-center">
                    <h4>¿CUÁL ES LA LÍNEA A TRANSPASAR?</h4>
                    <p>¿FIESTA? ¿DROGAS? ¿AMISTAD? ¿AMOR? <span class="item-accent item-bold">¿RAVE?</span></p>
                </div>

                <div class="mundo-monte__item item-left">
                    <h3>FRASE CATCHY</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus culpa at eaque cumque laboriosam adipisci minus, nostrum totam ducimus distinctio nam ipsa, rerum veritatis.</p>
                </div>

                <div class="mundo-monte__item item-center">
                    <h3>BIENVENIDO A</h3>
                    <img class="header__monte-logo" src="../assets/images/logo-word-white.png" alt="">
                </div>
            </div>

        </section>

        <CharacterDetails />
        <ChaptersAccess />
        <SpotifyPlaylist />
    </main>
</template>

<style lang="sass">
@use "@/style/fonts"
@use "@/style/colors"
@use "@/style/mixins"
@use "@/style/variables"

section.about-cover
    background-color: #2C2C2C
    @include mixins.flex(column, center, center, nowrap)
    color: colors.$light
    height: 80vh
    min-height: 500px
    img
        width: 350px
        max-width: 80vw
        margin-bottom: 1rem
    h3, h4
        line-height: 1
    h4
        color: colors.$accent-light-1
        

section.about-synopsis
    background-color: colors.$white
    color: colors.$dark-shadow
    padding-block: calc(variables.$section-gap * 3)
    p
        width: 800px
        max-width: 90vw
        margin-inline: auto
        margin-bottom: 3rem
    .synopsis__redes-icons
        @include mixins.flex(row, center, center, nowrap)
        gap: 1rem
        a
            width: 2rem
            height: 2rem
        .synopsis__icon
            color: v-bind(textcolor)
            transition: all variables.$transition-fast
            &:hover
                color: colors.$accent


section.mundo-monte
    background-position: center
    background-size: cover
    height: 2500px
    padding-block: 3rem
    .mundo-monte__container
        @include mixins.flex(column, space-between, normal, nowrap)
        gap: 2rem
        height: 100%
    .mundo-monte__item
    .item-right
        text-align: right
        margin-inline: auto 0
    .item-center
        text-align: center
    .item-left
        text-align: left
    .item-left, .item-right
        width: 50%
    .item-bold
        font-weight: fonts.$font-bold
    .item-accent
        color: colors.$accent
    .header__monte-logo
        width: 600px
        max-width: 80vw
</style>