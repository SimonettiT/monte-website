<script setup>
import { ref } from 'vue';
import GanttIcon from '@/assets/icons/GanttIcon.vue';
import UserJourneyIcon from '@/assets/icons/UserJourneyIcon.vue';
import VideoProjectIcon from '@/assets/icons/VideoProjectIcon.vue';
import ProductionIcon from '@/assets/icons/ProductionIcon.vue';
import DownloadIcon from '@/assets/icons/DownloadIcon.vue';

const downloadables = ref([
    {
        title: "Diagrama de Gantt",
        description: "Nuestro cronograma de producción",
        icon: GanttIcon,
        link: "https://media.simonettitomas.com/monte/diagrama-gantt.pdf"
    },
    {
        title: "Recorrido de Usuario",
        description: "Movimiento del usuario a través del transmedia",
        icon: UserJourneyIcon,
        link: "https://media.simonettitomas.com/monte/RECORRIDO%20DE%20USUARIO.pdf"
    },
    {
        title: "Plan Técnico",
        description: "Material técnico utilizado para el rodaje",
        icon: VideoProjectIcon,
        link: "https://media.simonettitomas.com/monte/PLAN%20T%C3%89CNICO%20WEB.pdf"
    },
    {
        title: "Plantillas de Producción",
        description: "Documentos para producción, rodaje y edición",
        icon: ProductionIcon,
        link: "https://media.simonettitomas.com/monte/PRODUCCION-MONTE.zip"
    }
])
</script>

<template>
    <section class="downloadables">
        <div class="downloadables__container container">
            <div class="downloadables__titles">
                <h3>Haz tu propio proyecto audiovisual</h3>
                <p>Descarga los archivos y plantillas que utilizamos para organizarnos y producir MONTE de manera gratuita.</p>
            </div>
            <div class="downloadables__list">
                <div class="downloadables__item" v-for="item in downloadables">
                    <div class="downloadable__icon">
                        <component :is="item.icon" class="downloadable__icon"/>
                        
                    </div>
                    <div class="downloadable__info">
                        <h5>{{ item.title }}</h5>
                        <p>{{ item.description }}</p>
                        <a :href="item.link" class="btn btn-outline" target="_blank"><span class="btn-text">DESCARGAR</span> <DownloadIcon class="download-icon"/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="sass" scoped>
@use "@/style/colors"
@use "@/style/fonts"
@use "@/style/mixins"
@use "@/style/variables"

section.downloadables
    background-color: colors.$white
    color: colors.$dark-shadow
    padding-block: 0 6rem
    .downloadables__titles
        p
            max-width: 600px
            margin-inline: auto
    .downloadables__list
        @include mixins.flex(row, center, flex-start, wrap)
        gap: 4rem 2rem
        margin-top: variables.$section-gap
        @media (max-width: variables.$bkp-medium)
            flex-direction: column
            gap: 2rem
            align-items: center
    .downloadables__item
        width: 400px
        p
            font-size: fonts.$font-sm
        .downloadable__icon
            height: variables.$icon-xxxl
.btn-outline
    @include mixins.flex(row, center, center, nowrap)
    gap: 1rem
    width: 50%
    margin-inline: auto
    margin-top: 1rem
    color: colors.$dark
    border-color: colors.$dark
    transition: all 0.3s ease-in-out
    &:hover
        color: colors.$light
        border-color: colors.$accent
        background-color: colors.$accent
    .download-icon
        height: variables.$icon-lg
    .btn-text
        line-height: 1
        padding-top: 6px
</style>