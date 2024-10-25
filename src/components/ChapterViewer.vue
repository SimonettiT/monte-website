<script setup>
const props = defineProps({
    chapter: {
        type: Object,
        required: true
    }
})

import PlayArrow from '@/assets/icons/PlayArrow.vue'
</script>

<template>
    <section class="chapter-viewer">
        <div class="chapter-viewer__container">
            <button class="teaser-btn btn" @click="openVideoModal(chapter.teaser)">VER TEASER</button>
            <iframe width="100%" height="100%" :src="chapter.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </section>
</template>

<style lang="sass" scoped>
@use "@/style/colors"
@use "@/style/variables"
@use "@/style/fonts"
@use "@/style/mixins"

.chapter-viewer__container
    background-color: #000
    width: 95vw
    height: auto
    max-height: 80vh
    aspect-ratio: 16/9
    margin: 0 auto
    position: relative

.teaser-btn
    position: absolute
    top: 2rem
    left: 2rem
    z-index: variables.$z-content-above
</style>