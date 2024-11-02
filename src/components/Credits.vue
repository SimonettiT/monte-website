<script setup>
import { ref } from 'vue';

// import JoseIMG from '@/assets/images/prod-team/jose.jpg';
import MartiIMG from '@/assets/images/prod-team/marti.jpg';
import MaleIMG from '@/assets/images/prod-team/male.jpg';
import FeliIMG from '@/assets/images/prod-team/feli.jpg';
import MatiIMG from '@/assets/images/prod-team/mati.jpg';
import JustiIMG from '@/assets/images/prod-team/justi.jpg';
import CandeIMG from '@/assets/images/prod-team/cande.jpg'; 
import TomyIMG from '@/assets/images/prod-team/tomy.jpg';

const mainCrew = ref([
    {
        name: 'Josefina Bett',
        img: 'jose',
        roles: ['Dirección', 'Guion']
    },
    {
        name: 'Martina Degiovanni',
        img: MartiIMG,
        roles: [''],
    },
    {
        name: 'Malena Llabot',
        img: MaleIMG,
        roles: ['Producción', 'Dirección de Arte', 'Guion', ],
    },
    {
        name: 'Felipe Lorenzatti',
        img: FeliIMG,
        roles: [''],
    },
    {
        name: 'Matías Elizondo',
        img: MatiIMG,
        roles: ['Director de Fotografía', 'Gaffer', 'Cámara', 'Colorista'],
    },
    {
        name: 'Justina Vazquez',
        img: JustiIMG,
        roles: [''],
    },
    {
        name: 'Candela Nogueira',
        img: CandeIMG,
        roles: ['Casting', 'Dirección de Actores', 'Guion', 'Edición'],
    },
    {
        name: 'Tomás Simonetti',
        img: TomyIMG,
        roles: ['Director de Sonido', 'Director de Post-Producción', 'Web Design', 'Efectos Especiales'],
    },
]);
const crew = ref([
    {
        name: 'Morena Pretto',
        role: 'Alfosina'
    },
    {
        name: 'María Paz Fernández',
        role: 'Franca'
    },
    {
        name: 'Mariana Martos',
        role: 'Renata'
    },
    {
        name: 'Nicolás Grosso',
        role: 'Máximo'
    },
    {
        name: 'Facundo Rivero',
        role: 'Dante'
    },
    {
        name: 'Emilio Agüero',
        role: 'Pipo'
    },
    {
        name: 'Cata Beles',
        role: 'Asist. Producción'
    },
    {
        name: 'Caro Maldonado',
        role: 'Asist. Producción'
    },
    {
        name: 'Valen Rodrigues',
        role: 'Asist. Video'
    },
    {
        name: 'Cruz Ortiz',
        role: 'Asist. Video'
    },
    {
        name: 'Jose Richard',
        role: 'Asist. Video'
    },
    {
        name: 'Gena Bertona',
        role: 'Asist. Sonido'
    },
    {
        name: 'Lu Altamira',
        role: 'Asist. Sonido'
    },
    {
        name: 'Lara Arias',
        role: 'A.D. Actoral'
    },
    {
        name: 'Francesca Taborda',
        role: 'Continuidad'
    },
    {
        name: 'Mati Bernardi',
        role: 'Continuidad'
    },
    {
        name: 'Justi Sánchez',
        role: 'Continuidad'
    },
    {
        name: 'Cris Luhning',
        role: 'Runner y Utilero'
    },
    {
        name: 'Carola Llabot',
        role: 'Maquillaje'
    },
    {
        name: 'Rocío Gomez',
        role: 'Maquillaje'
    },
    {
        name: "Santino Cuestas",
        role: "Cámara Backstage"
    },
    {
        name: "Antenor Casas",
        role: "Cámara Backstage"
    }
])
const extra = ref([
    "Joaquín Carreras",
    "Julieta Gattas",
    "Gordo Cruz",
    "Madgalena Tobal",
    "Fran Cabial",
    "Juana (amiga vicky)",
    "Lerda",
    "Vicky Vazquez",
    "Juan Bonadeo",
    "Vale Trifonoff",
    "Cata Ferrucci",
    "Clemen Vocos",
    "Valen Rossini",
    "Marti Silvestro",
    "Santino Cossar",
    "Abril Eizikovits",
    "Sayan",
    "Geral Chauvet",
    "Joaquín Saracco",
    "Floren",
    "Facu Sosaloyola",
    "Agos Alasino",
    "Amiel",
    "Lara Ferreyra",
    "Juan Diego Casali",
    "Tomas Faraón",
])
</script>

<template>
    <section class="credits">
        <div class="credits__container container">
            <h2>CONOCE A LOS CREADORES</h2>

            <div class="credits__main-crew">
                <div v-for="person in mainCrew" class="credits__person">
                    <img :src="person.img" :alt="person.name">
                    <h4>{{ person.name }}</h4>
                    <p v-for="role in person.roles">{{ role }}</p>
                </div>
            </div>
            <div class="credits__crew">
                <div v-for="person in crew" class="credits__person">
                    <p class="person-role">{{ person.role }}</p>
                    <p class="person-name">{{ person.name }}</p>
                </div>
            </div>
            <h3>Extras</h3>
            <div class="credits__extra">

                <p v-for="person in extra" class="credits__person">
                    {{ person }}
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="sass" scoped>
@use "@/style/fonts"
@use "@/style/colors"
@use "@/style/mixins"
@use "@/style/variables"

section.credits
    background-color: colors.$white
    color: colors.$dark
    padding-block: 5rem 7rem
.credits__main-crew
    @include mixins.grid(4, 2, stretch, start)
    gap: 2rem
    margin-bottom: calc(variables.$section-gap * 2)
    @media (max-width: variables.$bkp-small-medium)
        @include mixins.grid(3, 1, stretch, start)
    @media (max-width: variables.$bkp-small)
        @include mixins.grid(2, 1, stretch, start)
    img
        width: 100%
        margin-bottom: 0.5rem
        background-color: colors.$light-shadow-1
        height: auto
        aspect-ratio: 4/5
        border-radius: 0 0 20px 0
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px
    h4
        font-size: fonts.$font-md
        padding-block: auto
        transition: color 0.5s
        @media (max-width: 1000px)
            height: 4rem
    .credits__person:hover h4
        color: colors.$accent
    p
        font-size: fonts.$font-base


.credits__crew
    @include mixins.flex(row, space-between, center, wrap)
    gap: 2rem 2.5rem
    .credits__person
        font-size: fonts.$font-sm
        @media (max-width: 1000px)
            height: 4rem
        .person-name
            font-weight: fonts.$font-regular
            transition: color 0.5s
        .person-role
            text-transform: uppercase
            font-weight: fonts.$font-bold
            font-size: fonts.$font-sm
            line-height: 0.3
    .credits__person:hover .person-name
        color: colors.$accent
    
    .person-name
        font-weight: bold
        transition: color 0.5s
        font-size: fonts.$font-md
    .person-role
        text-transform: uppercase
        font-weight: normal
h3
    margin-block: 2rem 1rem
.credits__extra
    @include mixins.flex(row, space-evenly, center, wrap)
    gap: 0.5rem
    .credits__person
        color: inherit
        transition: color 0.2s
        &:hover
            color: colors.$accent

</style>