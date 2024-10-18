<script setup>
import SpotifyIcon from '@/assets/icons/SpotifyIcon.vue';
</script>

<template>
    <section class="spotify-playlist">
        <div class="spotify-playlist__container container">
            <iframe title="Playlist en Spotify de MONTE" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/149yIcZLbLUFCyghNBEs6Q?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <div class="spotify-playlist__text">
                <h5>MÚSICA DE MONTE</h5>
                <h3>ADENTRATE EN LA FIESTA</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni itaque dolores aut expedita laudantium cumque.</p>
                <div class="spotify-playlist__link">
                    <label>ABRIR EN</label>
                    <a href=""><SpotifyIcon class="icon spotify-playlist__icon" /></a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="sass" scoped>
@use "@/style/colors"
@use "@/style/fonts"
@use "@/style/mixins"
@use "@/style/variables"

section.spotify-playlist
    padding-block: calc(variables.$section-gap * 3)
    background-color: colors.$accent-dark
    color: colors.$white
    .spotify-playlist__container
        display: grid
        grid-template-columns: 1fr 1fr
        gap: 2rem
        align-items: center
        text-align: left
.spotify-playlist__text
    h5
        font-weight: fonts.$font-regular
    h3
        font-weight: fonts.$font-bold
        font-size: fonts.$font-xl
        line-height: 1
        margin-bottom: 2rem

    p
        margin-bottom: 1rem
    .spotify-playlist__link
        @include mixins.flex(row, flex-start, center, nowrap)
        label
            font-weight: fonts.$font-bold
            margin-right: 0.5rem
        a
            padding-top: 6px
        .spotify-playlist__icon
            width: 32px
            height: 32px
            fill: colors.$white
            margin-left: 0.5rem
            transition: fill 0.3s
            &:hover
                fill: colors.$accent
                transition: fill 0.3s
                cursor: pointer
iframe
    border-radius: 12px
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2)
    transition: box-shadow 0.3s
    background-color: colors.$dark
    &:hover
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.4)
        transition: box-shadow 0.3s
</style>