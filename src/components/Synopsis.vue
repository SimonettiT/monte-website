<script setup>
import InstagramIcon from "@/assets/icons/InstagramIcon.vue";
import YoutubeIcon from "@/assets/icons/YoutubeIcon.vue";
import SpotifyIcon from "@/assets/icons/SpotifyIcon.vue";
</script>
<template>
    <section class="synopsis">
        <div class="synopsis__content container">
            <div class="synopsis__thumbnail">
            </div>
            <div class="synopsis__text">
                <h5>SINOPSIS DE MONTE</h5>
                <h2>FRASE CATCHY</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit corrupti maiores iste enim consequatur,
                    non deserunt esse soluta hic perspiciatis est odit numquam dolor repellat tempore.
                </p>
                <a class="btn">
                    <router-link to="/sobre-monte">ADENTRATE EN LA FIESTA</router-link>
                </a>
            </div>
        </div>
        <div class="synopsis__redes">
            <h4>CONOCE MÁS EN NUESTRAS REDES</h4>
            <div class="synopsis__redes-icons">
                <a href="https://www.instagram.com/monteserieweb/" alt="Instagram de Monte" target="_blank"><InstagramIcon class="synopsis__icon"/></a> 
                <a href="" alt="YouTube de Monte" target="_blank"><YoutubeIcon class="synopsis__icon"/></a>
                <a href="https://open.spotify.com/playlist/149yIcZLbLUFCyghNBEs6Q?si=dcaf783e2dfa4bd6" alt="Spotify de Monte" target="_blank"><SpotifyIcon class="synopsis__icon"/></a>
            </div>
        </div>
    </section>
</template>


<style lang="sass" scoped>
@use "@/style/fonts"
@use "@/style/colors"
@use "@/style/mixins"
@use "@/style/links"
@use "@/style/variables"

section.synopsis
    background-color: colors.$dark
    color: colors.$light
    padding-block: calc(variables.$section-gap * 3)

.synopsis__content
    @include mixins.flex(row-reverse, space-between, center, wrap)
    .synopsis__text
        text-align: left
        width: 50%
        h5
            font-size: fonts.$font-sm
            color: colors.$accent-light-2
            text-transform: uppercase
        h2
            font-size: fonts.$font-xxl
            line-height: 1
            font-weight: fonts.$font-heavy
            margin-bottom: 1rem
        p
            font-size: fonts.$font-base
            font-weight: fonts.$font-light
            margin-bottom: 3rem
    .synopsis__thumbnail
        width: 45%
        height: 300px
        background-color: colors.$accent
        background: url('@/assets/images/home-cover.jpg') no-repeat center center
        background-size: cover
        border-radius: 0 0 50px 0
.synopsis__redes
    margin-top: variables.$section-gap
    h4
        font-size: fonts.$font-base
.synopsis__redes-icons
    @include mixins.flex(row, center, center, nowrap)
    gap: 1rem
    a
        width: 2rem
        height: 2rem
    .synopsis__icon
        color: colors.$light
        transition: all variables.$transition-fast
        &:hover
            color: colors.$accent
</style>