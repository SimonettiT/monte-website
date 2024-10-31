<script setup>
import { ref } from 'vue'
import MONTELogo from '@/assets/images/logo-word-white.png';
import ChapterViewer from '@/components/ChapterViewer.vue';
import ChaptersAccess from '@/components/ChaptersAccess.vue';
import Synopsis from '@/components/Synopsis.vue';


const chapters = ref([
    {
        chapterID: 1,
        name: 'ALFONSINA',
        teaser: 'https://www.youtube.com/watch?v=3v1ZQ6Z2JZQ',
        video: 'https://www.youtube.com/embed/9lxZpXWYlpA?si=rqq9SsGuASak85mu',
        videoThumbnail: 'https://i.ytimg.com/vi/3v1ZQ6Z2JZQ/maxresdefault.jpg',
        videoThumbnailSmall: 'https://i.ytimg.com/vi/3v1ZQ6Z2JZQ/mqdefault.jpg',
        videoThumbnailAlt: 'Alfonsina - Capítulo 1',
        synopsis: 'Alfonsina, Renata y Franca van a una fiesta buscando perderse en la noche, aunque Alfonsina no comparte el entusiasmo de sus amigas. Mientras la música y las luces intensifican todo a su alrededor, ella se siente cada vez más desconectada. Impulsada por algo que no puede explicar, decide alejarse, sin saber que su noche está a punto de cambiar de escenario, llevándola a un lugar tan incierto como inquietante.',
        isAvailable: true
    },
    {
        chapterID: 2,
        name: 'RENATA Y FRANCA',
        teaser: 'https://www.youtube.com/watch?v=3v1ZQ6Z2JZQ',
        video: 'https://www.youtube.com/watch?v=3v1ZQ6Z2JZQ',
        videoThumbnail: 'https://i.ytimg.com/vi/3v1ZQ6Z2JZQ/maxresdefault.jpg',
        videoThumbnailSmall: 'https://i.ytimg.com/vi/3v1ZQ6Z2JZQ/mqdefault.jpg',
        videoThumbnailAlt: 'Renata y Franca - Capítulo 2',
        synopsis: 'La música no deja de sonar y Renata y Franca  (O FRANCA Y RENATA) se ven atrapadas en un ambiente de excesos y miradas tensas. La ausencia de Alfonsina se hace evidente, y su búsqueda las lleva a recorrer un laberinto lleno de tensiones ocultas y reproches inesperados.',
        isAvailable: false
    },
    {
        chapterID: 3,
        name: 'MÁXIMO',
        teaser: 'https://www.youtube.com/watch?v=3v1ZQ6Z2JZQ',
        video: 'https://www.youtube.com/watch?v=3v1ZQ6Z2JZQ',
        videoThumbnail: 'https://i.ytimg.com/vi/3v1ZQ6Z2JZQ/maxresdefault.jpg',
        videoThumbnailSmall: 'https://i.ytimg.com/vi/3v1ZQ6Z2JZQ/mqdefault.jpg',
        videoThumbnailAlt: 'Máximo - Capítulo 3',
        synopsis: 'Entre porros y puchos, Maximo se deja llevar por el ambiente hasta que algo llama su atención. A lo lejos, una figura que se va de la fiesta. La música y las voces de sus amigos se desvanecen a sus espaldas, mientras él sigue una sombra en la noche, reviviendo recuerdos que se vuelven cada vez más inquietantes.',
        isAvailable: false
    },

])
const selectedChapter = ref(chapters.value[0])
</script>
<template>
    <main>
        <router-link to="/">
            <img :src="MONTELogo" class="monte-logo container" alt="Logo de MONTE"/>
        </router-link>
        <ChapterViewer :chapter="selectedChapter"/>
        <section class="chapter-info container">
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