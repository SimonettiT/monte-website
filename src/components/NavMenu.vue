<script setup>
import { ref } from 'vue'
import MenuHamburger from '@/assets/icons/MenuHamburger.vue'
const mobileNav = ref(false)
const toggleMobileNav = () => mobileNav.value = !mobileNav.value
</script>
<template>
    <nav>
        <div class="nav__menu-toggle">
            <button @click="toggleMobileNav" title="Abrir Menú" class="menu__icon-btn">
                <MenuHamburger class="menu__icon" />
            </button>
        </div>
        <transition name="mobile-nav">
                <ul v-show="mobileNav" class="mobile-nav__links">
                    <router-link to="/" class="link mobile-nav__link" @click="toggleMobileNav()">Inicio</router-link>
                    <router-link to="/capitulos" class="link mobile-nav__link" @click="toggleMobileNav()">Capítulos</router-link>
                    <router-link to="/sobre-monte" class="link mobile-nav__link" @click="toggleMobileNav()">Sobre MONTE</router-link>
                    <router-link to="/backstage" class="link mobile-nav__link" @click="toggleMobileNav()">Backstage</router-link>
                    
                </ul>
        </transition>
    </nav>
</template>


<style lang="sass" scoped>
@use "@/style/links"
@use "@/style/mixins"
@use "@/style/variables"
@use "@/style/colors"
@use "@/style/fonts"
@use "@/style/animations"



.nav__menu-toggle
    position: absolute
    top: 1rem
    right: 1rem
    z-index: variables.$z-content-above
    width: 2rem
    height: 2rem
.mobile-nav__links
    @include mixins.flex(column, flex-start, stretch, nowrap)
    position: fixed
    top: 0
    left: 0
    z-index: variables.$z-content-above
    width: 300px
    height: 100vh
    max-width: 70vw
    padding-top: 2rem
    text-align: left
    color: colors.$white
    background-color: colors.$dark-shadow
    h2
        font-size: fonts.$font-lg
        font-weight: fonts.$font-bold
        height: 3.5rem
        margin-left: 2rem
    .mobile-nav__link
        font-size: fonts.$font-md
        padding-left: 2rem
        padding-block: 1rem
        border-right: 5px solid transparent
        transition: all variables.$transition-fast
        &:hover
            border-right: 10px solid colors.$accent
            background-color: colors.$dark
.menu__icon-container
    position: relative
.menu__icon-btn
    background: transparent
    border: none
    outline: none
.menu__icon
    color: colors.$white
    width: 2rem
    height: 2rem
    cursor: pointer
</style>