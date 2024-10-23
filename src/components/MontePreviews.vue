<script setup>
import { ref } from 'vue';
const isSelected = ref(true);
</script>

<template>
    <section class="serie-preview">
        <div class="serie-preview__container container">
            <h3>FOTOGRAMAS DE LA SERIE WEB</h3>
            <img src="" alt="" class="preview__images-big">
            <div class="preview__images-thumb">
                <img :class="{selected: isSelected}" src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
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
    img
        cursor: pointer
    .selected
        border: 2px solid colors.$accent-light-2
@media (max-width: variables.$bkp-medium)
    .serie-preview
        padding-block: variables.$section-gap
        .preview__images-thumb
            gap: 0.25rem
            img
                height: 60px

</style>