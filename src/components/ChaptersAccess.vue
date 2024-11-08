<script setup>
import { ref } from 'vue'
import { useChaptersStore } from '@/stores/chapters';
import Lock from '@/assets/icons/Lock.vue'
import PlayArrow from '@/assets/icons/PlayArrow.vue';
import MONTEThumbnail from '@/assets/images/monte-thumbnail.jpg';

const chaptersStore = useChaptersStore();

const props = defineProps({
    background: {
        type: String,
        required: false,
        default: "#F2F2F2"
    },
    textcolor: {
        type: String,
        required: false,
        default: "#05000a"
    }
})

const changeChapter = (chapterID) => {
    chaptersStore.selectChapter(chapterID);
};

const getThumbnail = (video) => {
    if (video.isAvailable === true) {
        return video.videoThumbnail;
    } else {
        return MONTEThumbnail;
    }
}
</script>
<template>
    <section class="chapters-view">
        <div class="chapters-view__container container">

            <h3>Capítulos</h3>
            <div class="chapters__array">
                <div 
                    class="chapters__thumbnail" 
                    v-for="chapter in chaptersStore.chapters" 
                    :key="chapter.id">
                    <img :src="getThumbnail(chapter)" loading="lazy" :alt="chapter.title">
                    <router-link 
                        v-if="chapter.isAvailable === true" 
                        :to="{ name: 'Chapters' } "
                        @click="changeChapter(chapter.chapterID)"
                        >
                        <PlayArrow class="chapters__icon"/>
                    </router-link>
                    <div v-else>
                        <Lock class="chapters__icon-lock chapters__icon"/>
                    </div>
                </div>
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
    background-color: v-bind(background)
    color: v-bind(textcolor)
.chapters-view__container
    padding-block: variables.$section-gap calc(variables.$section-gap * 2.5)
    h3
        font-size: fonts.$font-xl
        color: colors.$dark
        text-align: left
        font-weight: fonts.$font-bold
.chapters__array
    @include mixins.flex(row, space-between, center, wrap)
    .chapters__thumbnail
        @include mixins.flex(column, center, center, nowrap)
        position: relative
        aspect-ratio: 16/9
        width: 31%
        background-color: colors.$dark-shadow
        border-radius: 5px
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5)
        transition: box-shadow 0.3s
        cursor: pointer
        img
            border-radius: 5px
            transition: filter variables.$transition-fast
            width: 100%
            display: block
            aspect-ratio: 231/130
        &:hover
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5)
        
        .chapters__icon
            height: variables.$icon-xxxl
            // max-height: 30%
            color: colors.$light
            margin: auto auto
            transition: color 0.3s
            position: absolute
            width: 4rem
            height: 4rem
            top: calc(50% - 2rem)
            left: calc(50% - 2rem)
            z-index: 2
            &:hover 
                color: colors.$accent-light-2
        .chapters__icon.chapters__icon-lock
            color: colors.$light
            max-height: 34%
            &:hover
                color: colors.$dark-light-2
            @media (max-width: variables.$bkp-medium)
                margin-top: 12px
            @media (max-width: variables.$bkp-small)
                margin-top: 0
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