<script setup>

import { useRoute } from 'vue-router'
import { onMounted, onUnmounted, computed, ref } from "vue"
import CoverImgBackground from './CoverImgBackground.vue'
import ScrollTo from "@/components/ScrollTo.vue"

// Icons
import MenuHamburger from '@/assets/icons/MenuHamburger.vue'
import ArrowDown from "@/assets/icons/ArrowDown.vue"
import PlayArrow from '@/assets/icons/PlayArrow.vue'

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
    <section class="home-header">
        <div class="cover__background">
            <Suspense>
                <CoverImgBackground />
            </Suspense>
        </div>
        





        <div class="cover__content container">

            
            <div class="header__titles">
                <img class="header__monte-logo" src="../assets/images/logo-word-white.png" alt="">
                <h4>Proyecto Transmedia</h4>
                <div class="header__buttons">
                    <button class="btn">VER TRAILER</button>
                    <button class="btn btn-outline">CÓMO SE HIZO</button>
                </div>
            </div>
            <div class="header__play-btn">
                <PlayArrow />
            </div>
        </div>
        <ScrollTo href="#main" :title="'Main content'">
            <ArrowDown class="header__arrow-down" />
        </ScrollTo>
    </section>
</template>



<style lang="sass" scoped>
@use "@/style/fonts"
@use "@/style/colors"
@use "@/style/mixins"
@use "@/style/variables"
@use "@/style/animations"
@use "@/style/links"


.home-header
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
.content__right-content
    @include mixins.flex(row, flex-end, center, nowrap)
    gap: 1rem

.nav__links, h2, .social-link, .header__arrow-down
    color: colors.$white

// Mobile Nav




.header__titles
    @include mixins.flex(column, center, flex-start, nowrap)
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
        margin-top: 0.5rem

.header__play-btn
    width: variables.$icon-xxxxl
    height: variables.$icon-xxxxl
    aspect-ratio: 1/1
    max-width: 100px
    margin: 0 auto
    color: colors.$accent
    background-color: colors.$accent
    border-radius: 50%
    cursor: pointer
    svg
        transition: color 0.5s
        color: colors.$light
        width: 60%
        margin-top: 20%
    &:hover
        svg
            color: colors.$light-shadow-2

.header__arrow-down
    width: 70px
    position: absolute
    bottom: 20px
    left: calc(50% - 35px)

@media (max-width: variables.$bkp-medium)
    .cover__content
        flex-direction: column
        .header__titles
            align-items: center
            text-align: center
            img.header__monte-logo
                max-width: 90vw
        .header__play-btn
            display: none
@media (max-width: variables.$bkp-small)
    .cover__content .header__buttons
        flex-direction: column
        gap: 1rem
        .btn
            width: 80vw
</style>