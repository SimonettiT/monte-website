<script setup>
import { onMounted, ref } from 'vue';
import Close from '@/assets/icons/Close.vue';
import Logo from '@/assets/icons/CompactMONTELogo.vue';


const emit = defineEmits(["closeNavMenu"])

const closeNavMenu = () => {
    emit('closeNavMenu')
}
const modal = ref(null);
onMounted(() => {
  modal.value.focus();
});
</script>

<template>
    <nav ref="modal" class="nav__background" @keyup.esc="closeNavMenu()" tabindex="0">
        <div class="nav__container">
            <Close class="close-icon" @click="closeNavMenu()"/>
            <Transition name="nav-links-list">
                <div class="nav__wrapper">
                    <div class="nav__links-section">
                        <RouterLink @click="closeNavMenu()" to="/" class="nav__link" title="Inicio">Inicio</RouterLink>
                        <RouterLink @click="closeNavMenu()" to="/capitulos" class="nav__link" title="Capítulos">Capítulos</RouterLink>
                        <RouterLink @click="closeNavMenu()" to="/sobre-monte" class="nav__link" title="Sobre MONTE">Sobre MONTE</RouterLink>
                        <RouterLink @click="closeNavMenu()" to="/backstage" class="nav__link" title="Backstage">Backstage</RouterLink>
                    </div>
                </div>
            </Transition>
            <Logo class="nav__background-logo"/>
        </div>
    </nav>
</template>

<style lang="sass" scoped>
@use "@/style/variables"
@use "@/style/colors"
@use "@/style/mixins"
@use "@/style/fonts"
.nav__background
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: colors.$dark
    z-index: variables.$z-modal-background
    overflow: hidden
    &:focus-visible
        outline: none
.nav__container
    position: relative
    height: 100%
    width: 100%
.nav__background-logo
    position: absolute
    bottom: -170px
    right: -60px
    aspect-ratio: 1
    width: 60%
    min-width: 400px
    z-index: variables.$z-modal-background
    fill: colors.$accent-dark
    color: colors.$accent-dark
    user-select: none
.close-icon
    position: absolute
    top: 2rem
    right: 2rem
    width: 3rem
    height: 3rem
    cursor: pointer
    z-index: variables.$z-modal-above
    color: colors.$light
.nav__wrapper
    @include mixins.flex(column, center, flex-start, nowrap)
    gap: 1rem
    text-align: left
    width: 80%
    margin-inline: auto
    padding-top: 5rem
    .nav__links-section
        @include mixins.flex(column, center, flex-start, nowrap)
        @media (min-width: variables.$bkp-large) and (max-height: 630px)
            flex-direction: row
            width: 100%
            justify-content: space-between
    .nav__link
        font-size: fonts.$font-xxxl
        letter-spacing: 0.3rem
        color: colors.$light-shadow-2
        position: relative
        transition: padding-left 0.3s ease-in-out
        z-index: variables.$z-modal-content
        &:hover
            animation: glitch 1s linear infinite
            color: colors.$light
            &:before,
            &:after
                content: attr(title)
                position: absolute
                left: 0
            &:before
                animation: glitchTop 1s linear infinite
                clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%)
                -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%)
            &:after
                animation: glitchBotom 1.5s linear infinite
                clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%)
                -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%)
    .nav__category-title
        z-index: variables.$z-modal-content
        letter-spacing: 0.5rem
        color: colors.$light


@keyframes glitch
    2%,64%
        transform: translate(2px,0) skew(0deg)
    4%,60%
        transform: translate(-2px,0) skew(0deg)
    62%
        transform: translate(0,0) skew(5deg)





@keyframes glitchTop
    2%,64%
        transform: translate(2px,-2px)
  
    4%,60%
        transform: translate(-2px,2px)
  
    62%
        transform: translate(13px,-1px) skew(-13deg)
  
@keyframes glitchBotom
    2%, 64%
        transform: translate(-2px,0)
  
    4%, 60%
        transform: translate(-2px,0)
  
    62%
        transform: translate(-22px,5px) skew(21deg)
  
</style>