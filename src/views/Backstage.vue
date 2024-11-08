<script setup>
import { defineAsyncComponent, ref, computed } from 'vue';
import BackstageInstagram from '@/components/BackstageInstagram.vue';
import Credits from '@/components/Credits.vue';
import MontePreviews from '@/components/MontePreviews.vue';
import FinancingCalltoAction from '@/components/FinancingCalltoAction.vue';
import DownloadableFiles from '@/components/DownloadableFiles.vue';
import Logo from '@/assets/icons/CompactMONTELogo.vue';

import Frame1Back from '@/assets/images/frames-backstage/frame-01.jpg';
import Frame2Back from '@/assets/images/frames-backstage/frame-02.jpg';
import Frame3Back from '@/assets/images/frames-backstage/frame-03.jpg';
import Frame4Back from '@/assets/images/frames-backstage/frame-04.jpg';
import Frame5Back from '@/assets/images/frames-backstage/frame-05.jpg';
import Frame6Back from '@/assets/images/frames-backstage/frame-06.jpg';
import Frame1ThumbBack from '@/assets/images/frames-backstage/frame-01-thumb.jpg';
import Frame2ThumbBack from '@/assets/images/frames-backstage/frame-02-thumb.jpg';
import Frame3ThumbBack from '@/assets/images/frames-backstage/frame-03-thumb.jpg';
import Frame4ThumbBack from '@/assets/images/frames-backstage/frame-04-thumb.jpg';
import Frame5ThumbBack from '@/assets/images/frames-backstage/frame-05-thumb.jpg';
import Frame6ThumbBack from '@/assets/images/frames-backstage/frame-06-thumb.jpg';


const frames = ref([
    {
        id: 1,
        src: Frame1Back,
        thumbSrc: Frame1ThumbBack
    },
    {
        id: 2,
        src: Frame2Back,
        thumbSrc: Frame2ThumbBack
    },
    {
        id: 3,
        src: Frame3Back,
        thumbSrc: Frame3ThumbBack
    },
    {
        id: 4,
        src: Frame4Back,
        thumbSrc: Frame4ThumbBack
    },
    {
        id: 5,
        src: Frame5Back,
        thumbSrc: Frame5ThumbBack
    },
    {
        id: 6,
        src: Frame6Back,
        thumbSrc: Frame6ThumbBack
    }
])


const VideoModal = defineAsyncComponent(() => import ("@/components/VideoModal.vue"))

const showVideoModal = ref(false);
const videoModalURL = ref("");
const videoModalTitle = ref("");

const toggleVideoModal = () => {
    showVideoModal.value = !showVideoModal.value
    videoModalURL.value = "YgY_a4oMwhI";
    videoModalTitle.value = "Backstage del Rodaje MONTE";
}

const bodyOverflow = computed(() => {
    if(showVideoModal.value) {
      return document.querySelector('body').style.overflow = 'hidden'
    } else {
      return document.querySelector('body').style.overflow = 'overlay'
    }
})

</script>
<template>
    <div class="backstage">
        <VideoModal
        v-if="showVideoModal"
        :videoURL="videoModalURL"
        :videoTitle="videoModalTitle"
        @closeVideoModal="showVideoModal = false"
        />
        <header class="backstage-cover">
            <video autoplay muted loop id="backstageVideo">
                <source src="../assets/backstage-cover.mp4" type="video/mp4">
            </video>

            <h1>¿CÓMO SE REALIZÓ MONTE?</h1>
            <p>CONOCE A LOS CREADORES DE LA SERIE Y TODO EL TRABAJO HASTA TU PANTALLA</p>
            <button class="btn" @click="toggleVideoModal()">VER EL VIDEO DETRÁS DE ESCENA</button>

        </header>
        <main>

            <MontePreviews title="LO QUE PASÓ DETRÁS DE CÁMARA" :frames="frames"/>
            <Credits />

            <section class="production-numbers">
                <div class="production-numbers__container container">
                    <h2>NÚMEROS DE MONTE</h2>
                    <div class="production__item">
                        <h3>$1.342.000 ARS | $1120 USD</h3>
                        <h5 class="subtitle-accent">Presupuesto total de la serie</h5>
                    </div>


                    <div class="production__item">
                        <h3>334 PERSONAS</h3>
                        <h5 class="subtitle-accent">Implicadas en la serie</h5>
                        <p>8 Creadores</p>
                        <p>17 Asistentes</p>
                        <p>6 Actores</p>
                        <p>46 Extras actorales</p>
                        <p>23 Marcas patrocinadoras</p>
                        <p>231 Inversores en la serie</p>
                        <p>3 Tutores universitarios</p>
                    </div>


                    <div class="production__item">
                        <h3>3 DÍAS DE <span class="subtitle-accent">RODAJE</span></h3>
                        <p>26 días de Pre-Producción</p>
                        <p>17 días de Post-Producción</p>
                    </div>

                    <div class="production__item">
                        <h3>3 <span class="subtitle-accent">CAPÍTULOS</span></h3>
                        <p>2 Locaciones</p>
                        <p>158 Tomas</p>
                        <p>239GB de Información</p>
                    </div>
                </div>
            </section>

            <BackstageInstagram />

            <section class="video-360">
                <div class="video-360__container container">
                    <h3>Cómo hicimos el Podcast de MONTE</h3>
                    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/5JodxwBSONA?si=LKOgXFpPo-2Zn1e7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <Logo class="video-360__background-logo"/>
            </section>

            <FinancingCalltoAction/>
            <DownloadableFiles/>
        </main>
    </div>
</template>

<style lang="sass">
@use '@/style/colors'
@use '@/style/fonts'
@use '@/style/mixins'
@use '@/style/variables'

.backstage
    color: colors.$light
    header.backstage-cover
        @include mixins.flex(column, center, center, nowrap)
        width: 100%
        min-height: 500px
        aspect-ratio: 16/9
        max-height: 700px
        #backstageVideo
            position: absolute
            right: 0
            bottom: 0
            min-width: 100%
            min-height: 100%
            object-fit: cover
            z-index: -1
            opacity: 0.3
        h1
            font-size: fonts.$font-xxxl
            line-height: 1
        p
            line-height: 1.5
            margin-bottom: 2rem

.production-numbers
    background-image: linear-gradient(180deg, colors.$dark-shadow 0%, colors.$dark 100%)
    padding-block: 5rem
    .production__item
        margin-top: 40vh
        &:nth-child(odd)
            text-align: right
        &:nth-child(even)
            text-align: left
        h3
            line-height: 1
        .subtitle-accent
            color: colors.$accent
            font-weight: fonts.$font-bold
        h5, p
            font-weight: fonts.$font-semibold

.video-360
    background-image: linear-gradient(140deg, colors.$accent 0%, colors.$dark 100%)
    padding-block: 5rem
    position: relative
    .video-360__container
        position: relative
        z-index: 2
    iframe
        aspect-ratio: 16/9
        border-radius: 0 0 50px 0
        width: 100%
        max-width: 800px
.video-360__background-logo
    position: absolute
    bottom: 0
    right: -60px
    aspect-ratio: 1
    width: 60%
    max-width: 700px
    z-index: 1
    fill: colors.$accent-dark
    color: colors.$accent-dark
    user-select: none
    &
        animation: glitch 1s linear infinite
        &:before,
        &:after
            content: attr(title)
            position: absolute
            left: 0
        &:before
            animation: glitchTop 1s linear infinite
            clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%)
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%)
        &:after
            animation: glitchBotom 1.5s linear infinite
            clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%)
            -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%)
@keyframes glitch
    2%,64%
        transform: translate(0px,0) skew(0deg)
    4%,60%
        transform: translate(0px,0) skew(0deg)
    62%
        transform: translate(0,0) skew(5deg)





@keyframes glitchTop
    2%,64%
        transform: translate(2px,-2px)
  
    4%,60%
        transform: translate(-2px,2px)
  
    62%
        transform: translate(13px,-1px) skew(-13deg)
  
@keyframes glitchBotom
    2%, 64%
        transform: translate(-2px,0)
  
    4%, 60%
        transform: translate(-2px,0)
  
    62%
        transform: translate(-22px,5px) skew(21deg)
</style>
