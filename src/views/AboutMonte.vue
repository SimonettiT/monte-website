<script setup>
import ChaptersAccess from '@/components/ChaptersAccess.vue';
import CharacterDetails from '@/components/CharacterDetails.vue';
import SpotifyPlaylist from '@/components/SpotifyPlaylist.vue';
import SpotifyIcon from '@/assets/icons/SpotifyIcon.vue';
import InstagramIcon from '@/assets/icons/InstagramIcon.vue';
import YoutubeIcon from '@/assets/icons/YoutubeIcon.vue';

import AboutMonteBackground from '@/assets/images/about-monte-background.jpg';
import MundoMonteCover from '@/assets/images/mundomonte-cover.jpg';


</script>
<template>
    <main>
        <section class="about-cover" :style="{ backgroundImage: 'url(' + MundoMonteCover + ')'}">
            <h3>EL MUNDO DE</h3>
            <img class="header__monte-logo" src="../assets/images/logo-word-white.png" alt="">
            <h4>Proyecto Transmedia</h4>
        </section>

        <section class="about-synopsis">
            <div class="about-synopsis__container">
                <h5>SINOPSIS DE MONTE</h5>
                <h2>¿QUÉ ESCONDE LA NOCHE?</h2>
                <p>Una fiesta se convierte en el escenario de una noche inolvidable. Lo que comienza como una noche divertida para tres amigas se convierte rápidamente en una carrera desesperada por descubrir la verdad. Pero esta historia no se queda en la pantalla: conocé el universo de MONTE y explorá más a fondo a los personajes, los secretos y los escenarios que dan vida a esta serie web.</p>
    
                <div class="synopsis__redes">
                    <h5>NUESTRAS REDES SOCIALES</h5>
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
                    <h3>CÓRDOBA. 2024</h3>
                    <p>En la casa de campo de la familia de Máximo, ubicada en Unquillo a solo 38 minutos de Córdoba Capital, se desata una fiesta en el lugar perfecto: sin vecinos que se quejen, sin perros que interrumpan y, sobre todo, sin padres que molesten.</p>
                </div>

                <div class="mundo-monte__item item-center">
                    <h3>LA FIESTA DE MÁXIMO TE ESPERA</h3>
                </div>
                
                <div class="mundo-monte__item item-center">
                    <h3>¿QUÉ ESCONDE LA NOCHE?</h3>
                </div>

                <div class="mundo-monte__item item-center">
                    <h4>TODOS QUIENES CREÍAS CONOCER CAMBIAN</h4>
                    <p><span class="item-accent item-bold">Sumergite en un laberinto lleno de tensiones ocultas </span></p>
                </div>

                <div class="mundo-monte__item item-left">
                    <h3>NO TE PIERDAS</h3>
                    <p>Mantente alerta, porque en MONTE, nada es lo que parece y el peligro está siempre al acecho. ¿En quién podrás confiar?</p>
                </div>

                <div class="mundo-monte__item item-center">
                    <h3>BIENVENIDO A</h3>
                    <img class="header__monte-logo" src="../assets/images/logo-word-white.png" alt="">
                </div>
            </div>

        </section>

        <CharacterDetails />
        <ChaptersAccess />

        <section class="juego-maxi">
            <div class="juego-maxi__container container">
                <img src="../assets/images/maxi-juego.jpg" alt="Juego de Máximo en Genially">
                <div class="juego-maxi__text">
                    <h2>JUEGO DE MÁXIMO</h2>
                    <p>¿Ya viste la serie? Jugá y descubrí más sobre Máximo: su relación con las chicas, las anécdotas de la casa, su compleja dinámica familiar ¡y mucho más!</p>
                    <a class="btn" href="https://view.genially.com/6727e488e9135eb3d7842f32" target="_blank">JUGAR AHORA</a>
                </div>
            </div>
        </section>

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
    background-position: center
    background-size: cover
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

.juego-maxi
    background-color: colors.$light
    padding-block: 1rem 4rem
    .juego-maxi__container
        @include mixins.flex(row-reverse, center, center, nowrap)
        background-color: colors.$dark
        gap: 2rem
        text-align: right
        border-radius: 0 0 50px 0
        padding: 3rem
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px
        h2
            line-height: 1
        img
            width: 50%
        p
            margin-block: 2rem 3rem
        @media (max-width: variables.$bkp-small-medium)
            @include mixins.flex(column, center, center, nowrap)
            text-align: center
            padding: 1rem 2rem 3rem
            gap: 0
            img
                width: 90%
            p
                margin-top: 1rem
</style>