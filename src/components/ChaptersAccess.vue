<script setup>
import Lock from '@/assets/icons/Lock.vue'
import PlayArrow from '@/assets/icons/PlayArrow.vue';
</script>
<template>
    <section class="chapters-view container">
        <h3>Capítulos</h3>
        <div class="chapters__array">
            <div class="chapters__thumbnail">
                <PlayArrow class="chapters__icon"/>
            </div>
            <div class="chapters__thumbnail">
                <Lock class="chapters__icon-lock chapters__icon"/>
            </div>
            <div class="chapters__thumbnail">
                <Lock class="chapters__icon-lock chapters__icon"/>
            </div>
        </div>
    </section>
</template>


<style lang="sass" scoped>
@use "@/style/fonts"
@use "@/style/colors"
@use "@/style/mixins"
@use "@/style/variables"
.chapters-view
    padding-block: variables.$section-gap
    h3
        font-size: fonts.$font-xl
        color: colors.$dark
        text-align: left
        font-weight: fonts.$font-bold
.chapters__array
    @include mixins.flex(row, space-between, center, wrap)
    .chapters__thumbnail
        @include mixins.flex(column, center, center, nowrap)
        aspect-ratio: 16/9
        width: 31%
        background-color: colors.$dark-shadow
        border-radius: 5px
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5)
        transition: box-shadow 0.3s
        cursor: pointer
        &:hover
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5)
        
        .chapters__icon
            height: variables.$icon-xxxl
            max-height: 30%
            color: colors.$light
            margin: auto auto
            transition: color 0.3s
            &:hover 
                color: colors.$accent-light-2
        .chapters__icon.chapters__icon-lock
            color: colors.$light
            max-height: 25%
            &:hover
                color: colors.$dark-light-2
@media (max-width: variables.$bkp-small)
    .chapters-view h3
        text-align: center
    .chapters__array
        gap: 1rem
        .chapters__thumbnail
            margin: 0 auto
            width: 90%
            aspect-ratio: 16/9
            &:last-child
                margin-block: 0
</style>