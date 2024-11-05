<script setup>
import { ref } from 'vue'
import { useChaptersStore } from '@/stores/chapters';
import { watch } from 'vue';

import MONTELogo from '@/assets/images/logo-word-white.png';
import ChapterViewer from '@/components/ChapterViewer.vue';
import ChaptersAccess from '@/components/ChaptersAccess.vue';
import Synopsis from '@/components/Synopsis.vue';

const chaptersStore = useChaptersStore();


watch(() => chaptersStore.selectedChapter, (newChapter) => {
    selectedChapter.value = newChapter;
    { immediate: true }
});



const selectedChapter = ref(chaptersStore.selectedChapter)
console.log(console.log(chaptersStore.selectedChapter))
</script>
<template>
    <main>
        <router-link to="/">
            <img :src="MONTELogo" class="monte-logo container" alt="Logo de MONTE"/>
        </router-link>
        <ChapterViewer v-if="selectedChapter" :chapter="selectedChapter"/>
        <section v-if="selectedChapter" class="chapter-info container">
            <h2>{{ selectedChapter.videoThumbnailAlt }}</h2>
            <p>{{ selectedChapter.synopsis }}</p>
        </section>
        <ChaptersAccess />
        <Synopsis background="#fff" textcolor="#05000a"/>
    </main>
</template>

<style lang="sass" scoped>
@use '@/style/colors'
@use '@/style/fonts'
@use '@/style/mixins'
@use '@/style/variables'


.monte-logo
    height: 50px
    width: auto
    position: absolute
    top: 2rem
    left: 2rem


main
    padding-top: 8rem
section.chapter-info
    color: colors.$white
    text-align: left
    padding-block: 4rem 5rem
    h2
        text-transform: uppercase
</style>