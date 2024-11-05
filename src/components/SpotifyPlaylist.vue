<script setup>
import SpotifyIcon from '@/assets/icons/SpotifyIcon.vue';
</script>

<template>
    <section class="spotify-playlist">
        <div class="spotify-playlist__container container">
            <iframe title="Playlist en Spotify de MONTE" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7mroeAWyuDwVIdG3UWajlJ?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <div class="spotify-playlist__text">
                <h5>EL RITMO DE MONTE</h5>
                <h3>ESCUCHÁ LA FIESTA</h3>
                <p>La noche es más intensa con la música adecuada, y esta noche suena un musicón. Escuchá la playlist de la fiesta y entendé porqué nadie puede dejar de bailar. </p>
                <a href="https://open.spotify.com/playlist/7mroeAWyuDwVIdG3UWajlJ?si=a3e4db0fc6bc44b8" target="_blank" class="spotify-playlist__link">
                    <label>ABRIR EN</label>
                    <SpotifyIcon class="icon spotify-playlist__icon" />
                </a>
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
        @include mixins.flex(row, space-between, center, nowrap)
        gap: 2rem
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
            cursor: pointer
            font-weight: fonts.$font-semibold
            margin-right: 0.5rem
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
@media (max-width: variables.$bkp-medium)
    section.spotify-playlist
        padding-block: calc(variables.$section-gap * 2)
        .spotify-playlist__container
            flex-direction: column-reverse
            text-align: center
            gap: 1rem
            .spotify-playlist__link
                justify-content: center
            .spotify-playlist__text h3
                margin-bottom: 1rem
            
</style>