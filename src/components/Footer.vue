<script setup>
import InstagramIcon from '@/assets/icons/InstagramIcon.vue';
import UBPLogo from '@/assets/icons/UBPLogo.vue';
import YoutubeIcon from '@/assets/icons/YoutubeIcon.vue';
import SpotifyIcon from '@/assets/icons/SpotifyIcon.vue';
import CompactMONTELogo from '@/assets/icons/CompactMONTELogo.vue';
</script>

<template>
    <footer>
        <div class="footer__wrapper container">
            <section class="footer__section footer__identity">
                <CompactMONTELogo class="identity__logo"/>
                <div class="identity__content">
                    <p>MONTE © 2024 - Diseñado por <a href="https://simonettitomas.com/">Tomás Simonetti</a></p>
                    <p>Proyecto Transmedia de Universidad Blas Pascal</p>
                </div>
            </section>

            <section class="footer__section footer__nav">
                <h5>Menú</h5>
                <ul>
                    <li><RouterLink to="/">Inicio</RouterLink></li>
                    <li><RouterLink to="/capitulos">Capítulos</RouterLink></li>
                    <li><RouterLink to="/sobre-monte">Sobre MONTE</RouterLink></li>
                    <li><RouterLink to="/backstage">Backstage</RouterLink></li>
                </ul>
            </section>

            <section class="footer__section footer__social">
                <h5>Redes Sociales</h5>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/monteserieweb/" target="_blank" title="Instagram">
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" target="_blank" title="Canal MONTE en Youtube">
                            <YoutubeIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://open.spotify.com/playlist/149yIcZLbLUFCyghNBEs6Q?si=1a13e18c132c466b" target="_blank" title="Playlist de MONTE en Spotify">
                            <SpotifyIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ubp.edu.ar/" target="_blank" title="Universidad Blas Pascal">
                            <UBPLogo />
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </footer>
</template>
<style lang="sass" scoped>
@use "@/style/variables"
@use "@/style/colors"
@use "@/style/mixins"
@use "@/style/fonts"
footer
    background-color: colors.$dark
    color: colors.$light
    .footer__wrapper
        @include mixins.flex(row, space-between, flex-start, nowrap)
        padding: 2rem 3rem
.footer__section
    text-align: left
    li
        list-style: none
    h5
        color: colors.$accent
        user-select: none
        letter-spacing: 0.15rem
    a:hover
        text-decoration: underline

.footer__identity
    @include mixins.flex(column, center, flex-start, nowrap)
    max-width: 50%
    .identity__logo
        width: 40%
        aspect-ratio: 1/1
        margin-right: 1rem
        margin-bottom: 1rem
    .identity__content
        p
            color: colors.$light
            font-size: fonts.$font-sm
            a
                text-decoration: underline
                font-size: fonts.$font-sm
                &:hover
                    text-decoration: underline
.footer__social
    ul
        @include mixins.flex(row, flex-start, center, wrap)
        gap: 0.5rem
        max-width: 200px
        svg
            width: 2.5rem
            padding: 0.3rem
            transition: all variables.$transition-fast
            &:hover
                padding: 0
.footer__nav
    li
        margin-block: 1rem
@media (max-width: variables.$bkp-medium)
    .footer__identity
        .identity__logo
            width: 60%
@media (max-width: 610px)
    footer
        .footer__wrapper
            @include mixins.flex(column-reverse, center, center, wrap)
            gap: 2rem
            padding-inline: 0
    .footer__section
        text-align: center
    .footer__identity
        align-items: center
        max-width: 100%
        .identity__logo
            width: 50%
            margin-right: 0

</style>