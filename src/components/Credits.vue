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
        roles: ['Directora', 'Productora', 'Guionista']
    },
    {
        name: 'Martina Degiovanni',
        img: MartiIMG,
        roles: ['Directora', 'Productora', 'Guionista'],
    },
    {
        name: 'Malena Llabot',
        img: MaleIMG,
        roles: ['Directora', 'Productora', 'Guionista'],
    },
    {
        name: 'Felipe Lorenzatti',
        img: FeliIMG,
        roles: ['Directora', 'Productora', 'Guionista'],
    },
    {
        name: 'Matías Elizondo',
        img: MatiIMG,
        roles: ['Directora', 'Productora', 'Guionista'],
    },
    {
        name: 'Justina Vazquez',
        img: JustiIMG,
        roles: ['Directora', 'Productora', 'Guionista'],
    },
    {
        name: 'Candela Nogueira',
        img: CandeIMG,
        roles: ['Directora', 'Productora', 'Guionista'],
    },
    {
        name: 'Tomás Simonetti',
        img: TomyIMG,
        roles: ['Directora', 'Productora', 'Guionista'],
    },
]);
const crew = ref([
    {
        name: 'Mariana Wainstein',
        role: 'Alfonsina'
    },
    {
        name: 'Mariana Wainstein',
        role: 'Alfonsina'
    },
    {
        name: 'Mariana Wainstein',
        role: 'Alfonsina'
    },
    {
        name: 'Mariana Wainstein',
        role: 'Alfonsina'
    },
    {
        name: 'Mariana Wainstein',
        role: 'Alfonsina'
    },
    {
        name: 'Mariana Wainstein',
        role: 'Alfonsina'
    },
    {
        name: 'Mariana Wainstein',
        role: 'Alfonsina'
    },
    {
        name: 'Mariana Wainstein',
        role: 'Alfonsina'
    },
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
                <p v-for="person in crew" class="credits__person">
                    <span class="person-name">{{ person.name }}</span>
                     - 
                    <span class="person-role">{{ person.role }}</span>
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
    @include mixins.flex(row, space-evenly, center, wrap)
    gap: 0.5rem
    .credits__person:hover .person-name
        color: colors.$accent

    .person-name
        font-weight: bold
        transition: color 0.5s
    .person-role
        text-transform: uppercase
        font-weight: normal

        

</style>