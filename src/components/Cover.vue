<script setup>

import { useRoute } from 'vue-router'
import { onMounted, onUnmounted, computed, ref } from "vue"
import CoverImgBackground from './CoverImgBackground.vue'
import ScrollTo from "@/components/ScrollTo.vue"

// Icons
import MenuHamburger from '@/assets/icons/MenuHamburger.vue'
import Instagram from "@/assets/icons/Instagram.vue"
import Linkedin from "@/assets/icons/Linkedin.vue"
import MailOutline from "@/assets/icons/MailOutline.vue"
import ArrowDown from "@/assets/icons/ArrowDown.vue"

// Watches for window resize to display the desktop/mobile menu
const windowWidth = ref(window.innerWidth)
const onWidthChange = () => windowWidth.value = window.innerWidth
onMounted(() => window.addEventListener('resize', onWidthChange))
onUnmounted(() => window.removeEventListener('resize', onWidthChange))
const isMobile = computed(() => (windowWidth.value <= 750) ? true : false)

const mobileNav = ref(false)
const toggleMobileNav = () => mobileNav.value = !mobileNav.value

</script>

<template>
    <header>
        <div class="cover__background">
            <Suspense>
                <CoverImgBackground />
            </Suspense>
        </div>
        <nav>
            <div class="content__right-content">
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





        <div class="cover__content">

            
            <div class="header__titles">
                <img class="header__monte-logo" src="../assets/images/logo-word-white.png" alt="">
                <h3>Proyecto Transmedia</h3>
                <div class="header__buttons">
                    <button class="btn">VER TRAILER</button>
                    <button class="btn btn-outline">CÓMO SE HIZO</button>
                </div>
            </div>
            <div class="header__play-btn">
                
            </div>
            <ScrollTo href="#main" :title="'Main content'">
                <ArrowDown class="header__arrow-down" />
            </ScrollTo>
        </div>
    </header>
</template>



<style lang="sass" scoped>
@use "@/style/fonts"
@use "@/style/colors"
@use "@/style/mixins"
@use "@/style/variables"
@use "@/style/animations"
@use "@/style/links"


header
    height: 100vh
    min-height: 550px
    position: relative
    color: colors.$white

// Background
.cover__background
    filter: brightness(0.5)
    top: 0
    left: 0
    overflow: hidden
    z-index: variables.$z-content-bellow
    background-color: colors.$dark
.cover__background--video
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    object-fit: cover
.cover__background, .cover__background--video
    width: 100%
    height: 100%
    position: absolute

// Content
.cover__content
    @include mixins.flex(row, space-between, center, nowrap)
    z-index: variables.$z-content-above
nav
    @include mixins.flex(row, space-between, center, nowrap)
    width: calc(95% - 1.4rem)
    margin-inline: auto
    padding-top: 2rem
    height: 5rem
    h2
        font-size: fonts.$font-lg
        font-weight: fonts.$font-bold
        height: 3rem
.content__right-content
    @include mixins.flex(row, flex-end, center, nowrap)
    gap: 1rem

.nav__links, h2, .social-link, .header__arrow-down
    color: colors.$white

// Mobile Nav

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


.header__titles
    @include mixins.flex(column, center, center, nowrap)
    height: calc(100vh - 5rem)
    img.header__monte-logo
        width: 400px
        max-width: 50vw
        user-select: none
        -webkit-user-drag: none
        -webkit-animation: tracking-in-expand 1.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both
        animation: tracking-in-expand 1.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both
    .subtitle
        font-weight: fonts.$font-light
        display: block
    .header__buttons
        @include mixins.flex(row, center, center, nowrap)
        gap: 1rem
        margin-top: 2rem
.header__arrow-down
    width: 70px
    position: absolute
    bottom: 20px
    left: calc(50% - 35px)
</style>