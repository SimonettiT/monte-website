<template>
<button class="btn btn__component" v-bind="$attrs">
    <span class="btn__content">
        <slot name="left">
            
        </slot>
        <slot>
            
        </slot>
        <slot name="right">
            
        </slot>
    </span>
</button>
    
</template>
<style lang="sass" scoped>
@use "@/style/mixins"
@use "@/style/colors"
@use "@/style/fonts"
@use "@/style/variables"
.btn__component
    margin-block: 1rem
    display: block
    background-color: transparent
    color: colors.$light
    -webkit-tap-highlight-color: transparent
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff)
    font-size: fonts.$font-base
    letter-spacing: 0.05rem
    overflow: hidden
    position: relative
    transition: border variables.$transition-fast
    &:disabled
        cursor: default
    &:-moz-focusring
        outline: auto
    & [hidden]
        display: none
    &:before
        aspect-ratio: 1
        background-color: colors.$accent
        border-radius: 50%
        content: ""
        left: -100%
        position: absolute
        top: 50%
        transform: translateY(-50%) scale(1)
        transform-origin: left center
        transition: transform 0.3s ease
        width: 100%
    &:hover
        color: colors.$light
        border-color: colors.$accent
    &:hover:before
        transform: translateY(-50%) scale(2.1)
    &:hover .btn__content
        color: colors.$white
.btn--align-left
    margin-inline: 0 auto
.btn--align-right
    margin-inline: auto 0
.btn--align-center
    margin-inline: auto
.btn__content
    @include mixins.flex(row, center, center, nowrap)
    height: 30px
    gap: 0.5rem
    mix-blend-mode: plus-lighter

    z-index: variables.$z-content-above
    transition: color 0.2s ease


</style>