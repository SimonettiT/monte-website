<script setup>
import BackstageInstagram from '@/components/BackstageInstagram.vue';
import Credits from '@/components/Credits.vue';
import MontePreviews from '@/components/MontePreviews.vue';


</script>
<template>
    <div class="backstage">
        <header class="backstage-cover">
            <h1>¿CÓMO SE REALIZÓ MONTE?</h1>
            <p>CONOCE A LOS CREADORES DE LA SERIE Y TODO EL TRABAJO HASTA TU PANTALLA</p>
            <button class="btn">VER EL VIDEO DETRÁS DE ESCENA</button>

        </header>
        <main>

            <MontePreviews title="LO QUE PASÓ DETRÁS DE CÁMARA"/>
            <Credits />

            <section class="production-numbers">
                <div class="production-numbers__container container">
                    <h2>NÚMEROS DE MONTE</h2>
                    <div class="production__item">
                        <h3>$1.456.138 ARS | $1462 USD</h3>
                        <h5 class="subtitle-accent">Presupuesto total de la serie</h5>
                    </div>


                    <div class="production__item">
                        <h3>531 PERSONAS</h3>
                        <h5 class="subtitle-accent">implicadas en la serie</h5>
                        <p>8 creadores</p>
                        <p>20 asistentes</p>
                        <p>6 actores</p>
                        <p>45 extras actorales</p>
                        <p>342 inversores en la serie</p>
                    </div>


                    <div class="production__item">
                        <h3>3 DÍAS DE <span class="subtitle-accent">RODAJE</span></h3>
                        <p>26 días de Pre-Producción</p>
                        <p>17 días de Post-Producción</p>
                    </div>

                    <div class="production__item">
                        <h3>3 <span class="subtitle-accent">CAPÍTULOS</span></h3>
                        <p>2 Locaciones</p>
                        <p>158 tomas</p>
                        <p>239GB de información</p>
                    </div>
                </div>
            </section>

            <BackstageInstagram />

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
</style>
