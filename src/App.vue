<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import NavbarIcon from '@/assets/icons/MenuHamburger.vue';
import NavMenu from './components/NavMenu.vue';
import Footer from './components/Footer.vue';

const isNavOpen = ref(false);
</script>

<template>
    <div class="header-nav">
        <Transition name="fade">
                <NavMenu v-if="isNavOpen" @closeNavMenu="isNavOpen = false"/>
        </Transition>
        <button class="nav__burger-btn" title="Abrir menú de navegación">
            <NavbarIcon class="cover__icon" @click="isNavOpen = !isNavOpen"/>
        </button>
    </div>

    <RouterView />
    <Footer />
</template>

<style lang="sass">
@use "@/style/fonts"
@use "@/style/links"
@use "@/style/colors"
@use "@/style/variables"
*
    box-sizing: border-box
    margin: 0
    padding: 0
#app
    font-family: "articulat-cf", sans-serif
    font-style: normal
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    line-height: 1.5
body
    background-color: colors.$dark
    color: colors.$dark
    overflow: overlay
    min-height: 100vh
    text-rendering: optimizeLegibility
.container
    max-width: 1080px
    width: 95%
    margin-inline: auto

img
    max-width: 100%
h1
    font-size: fonts.$font-xxxl
    font-family: "articulat-heavy-cf", sans-serif
h2
    font-size: fonts.$font-xxl
h3
    font-size: fonts.$font-xl
h4
    font-size: fonts.$font-lg
h5
    font-size: fonts.$font-base
h6
    font-size: fonts.$font-sm
p, a
    font-size: fonts.$font-base
//  Scrollbar
*
    scrollbar-width: auto
    scrollbar-color: colors.$light
*::-webkit-scrollbar
    width: 0.7rem
    background: transparent
*::-webkit-scrollbar-thumb
    background-color: colors.$light-shadow-3
    &:hover
        background-color: colors.$light-shadow-2


//   When the modal is open, the body isn't scrollable.
//   This style is marked as !important because otherwise it is nullified by the default element style

#modal-open
    overflow: hidden !important

.header-nav
    position: absolute
    width: 100%
    height: auto
    .nav__burger-btn
        border: none
        background-color: transparent
        position: absolute
        width: 3rem
        aspect-ratio: 1
        cursor: pointer
        height: auto
        top: 2rem
        right: 2rem
        z-index: variables.$z-content-above
    svg
        width: 100%
        height: 100%
        fill: colors.$light
        color: colors.$light
        user-select: none
        &:hover
            fill: colors.$accent
            color: colors.$accent



.markdown-text
    line-height: 1.7
    text-align: left
    *
        margin-block: 1.5rem
    p, a, span
        font-size: fonts.$font-md
    a
        color: colors.$accent-light-1
        text-decoration: underline
    br
        display: block
        content: ""
        margin-top: 0.7em
        line-height: 200%
        vertical-align: top
    h1, h2, h3, h4, h5, h6
        margin-block: 2rem 1.5rem
    li
        margin-block: 0.5rem
    img
        width: 100%
        max-width: 1280px
        max-height: 700px
        display: block
        height: auto
        margin-inline: auto
        object-fit: cover
        object-position: center

.fade-enter-active,
.fade-leave-active
    transition: opacity .3s
.fade-enter-from,
.fade-leave-to
    opacity: 0
</style>