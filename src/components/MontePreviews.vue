<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    frames: {
        type: Array,
        required: true
    }
})

const selectedFrame = ref(null);

watch(() => props.frames, (newFrames) => {
    if (newFrames.length > 0) {
        selectedFrame.value = newFrames[0];
    }
});

const selectFrame = (frame) => {
    selectedFrame.value = frame;
    console.log(selectedFrame.value);
}

onMounted(() => {
    if (props.frames.length > 0) {
        selectedFrame.value = props.frames[0];
    }
});
</script>
 
<template>
    <section class="serie-preview">
        <div class="serie-preview__container container">
            <h3>{{ title }}</h3>
            <img v-if="selectedFrame" :src="selectedFrame.src" alt="" :key="selectedFrame.src" class="preview__images-big" loading="lazy" />
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
@use "@/style/fonts"

.serie-preview
    padding-block: variables.$section-gap
    background-color: colors.$white
    color: colors.$dark
    h3
        font-size: fonts.$font-lg
        font-weight: fonts.$font-semibold
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