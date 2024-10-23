<script setup>
import { ref } from 'vue';

import Frame1 from '@/assets/images/frames/frame-01.jpg';
import Frame2 from '@/assets/images/frames/frame-02.jpg';
import Frame3 from '@/assets/images/frames/frame-03.jpg';
import Frame4 from '@/assets/images/frames/frame-04.jpg';
import Frame5 from '@/assets/images/frames/frame-05.jpg';
import Frame6 from '@/assets/images/frames/frame-06.jpg';
import Frame1Thumb from '@/assets/images/frames/frame-01-thumb.jpg';
import Frame2Thumb from '@/assets/images/frames/frame-02-thumb.jpg';
import Frame3Thumb from '@/assets/images/frames/frame-03-thumb.jpg';
import Frame4Thumb from '@/assets/images/frames/frame-04-thumb.jpg';
import Frame5Thumb from '@/assets/images/frames/frame-05-thumb.jpg';
import Frame6Thumb from '@/assets/images/frames/frame-06-thumb.jpg';

const frames = ref([
    {
        id: 1,
        src: Frame1,
        thumbSrc: Frame1Thumb
    },
    {
        id: 2,
        src: Frame2,
        thumbSrc: Frame2Thumb
    },
    {
        id: 3,
        src: Frame3,
        thumbSrc: Frame3Thumb
    },
    {
        id: 4,
        src: Frame4,
        thumbSrc: Frame4Thumb
    },
    {
        id: 5,
        src: Frame5,
        thumbSrc: Frame5Thumb
    },
    {
        id: 6,
        src: Frame6,
        thumbSrc: Frame6Thumb
    }
])

const selectedFrame = ref(frames.value[0]);

const selectFrame = (frame) => {
    selectedFrame.value = frame;
}
</script>

<template>
    <section class="serie-preview">
        <div class="serie-preview__container container">
            <h3>FOTOGRAMAS DE LA SERIE WEB</h3>
            <img :src="selectedFrame.src" alt="" class="preview__images-big" loading="lazy" />
            <div class="preview__images-thumb">
                <img @click="selectFrame(frame)" v-for="frame in frames" :class="{ selected: selectedFrame === frame }" :src="frame.thumbSrc" alt="" loading="lazy">
            </div>
        </div>
    </section>
</template>

<style lang="sass" scoped>
@use "@/style/variables"
@use "@/style/mixins"
@use "@/style/colors"

.serie-preview
    padding-block: variables.$section-gap
    background-color: colors.$white
.preview__images-big
    width: 100%
    height: auto
    aspect-ratio: 16/9
    margin-bottom: 1rem
img
    background-color: colors.$light
    min-width: 50px
    height: 97.5px
    aspect-ratio: 16/9
.preview__images-thumb
    @include mixins.flex(row, center, center, wrap)
    gap: 0.5rem
    border: 0
    img
        cursor: pointer
    .selected
        transition: border 0.3s ease-in-out
        border: 4px solid colors.$accent-light-2
@media (max-width: variables.$bkp-medium)
    .serie-preview
        padding-block: variables.$section-gap
        .preview__images-thumb
            gap: 0.25rem
            img
                height: 60px

</style>