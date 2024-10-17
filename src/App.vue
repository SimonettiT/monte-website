<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavMenu from './components/NavMenu.vue';
</script>

<template>
  <header>
    <NavMenu />
  </header>

  <RouterView />
</template>

<style lang="sass">
@use "@/style/fonts"
@use "@/style/links"
@use "@/style/colors"
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
    background-color: colors.$white
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
    background-color: colors.$dark-light-3
    border-radius: 10px
    &:hover
        background-color: colors.$dark-light-2


//   When the modal is open, the body isn't scrollable.
//   This style is marked as !important because otherwise it is nullified by the default element style

#modal-open
    overflow: hidden !important



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