<script setup>
import { ref, watch, nextTick } from 'vue';
import Alfonsina from '@/assets/images/alfonsina.jpg';
import Maximo from '@/assets/images/maximo.jpg';
import Franca from '@/assets/images/franca.jpg';
import Pipo from '@/assets/images/pipo.jpg';
import Renata from '@/assets/images/renata.jpg';
import Dante from '@/assets/images/dante.jpg';

import AlfonsinaThumb from '@/assets/images/alfonsina-thumb.jpg';
import MaximoThumb from '@/assets/images/maximo-thumb.jpg';
import FrancaThumb from '@/assets/images/franca-thumb.jpg';
import PipoThumb from '@/assets/images/pipo-thumb.jpg';
import RenataThumb from '@/assets/images/renata-thumb.jpg';
import DanteThumb from '@/assets/images/dante-thumb.jpg';


const characters = ref([
        {
            name: 'Alfonsina',
            thumb: Alfonsina,
            miniThumb: AlfonsinaThumb,
            description: 'Siempre se asegura de que sus amigas lleguen a casa enteras. Estudia Psicología, no toca las drogas y, aunque es medio tímida, no tiene drama en decir lo que piensa. sufre de FOMO (miedo a perderse algo), por lo que sale más de lo que le gustaría. No se va de la fiesta, pero te deja clarísimo que quiere irse.',
            color: '#37c8d5'
        },
        {
            name: 'Máximo',
            thumb: Maximo,
            miniThumb: MaximoThumb,
            description: 'El dueño de la casa. Siempre busca vivir al límite. Estudia ingeniería, pero eso no es lo que le importa, su verdadera prioridad es la noche, la adrenalina, la fiesta. Ex rugbier, extrovertido, lindo y competitivo.',
            color: '#006c17'
        },
        {
            name: 'Franca',
            thumb: Franca,
            miniThumb: FrancaThumb,
            description: 'La líder no oficial del grupo, siempre buscando ser el centro de atención. Estudia Derecho, le encanta tener el control y con su carisma consigue (casi siempre) lo que quiere. Una pick me girl detrás de la atención masculina. ',
            color: '#ef0000'
        },
        {
            name: 'Pipo',
            thumb: Pipo,
            miniThumb: PipoThumb,
            description: 'El primero en organizar los planes del finde. Fue compañero de las chicas en el colegio y es el mejor amigo de Franca. siempre sabe cómo hacer que todos se sientan incluidos. Ex rugbier y carismático, aunque a veces puede ser invasivo. Nunca piensa en las consecuencias, solo en el finde que viene.',
            color: '#d53782'
        },
        {
            name: 'Renata',
            thumb: Renata,
            miniThumb: RenataThumb,
            description: 'Siempre tiene algo para contar y es la primera en llevarse bien con todos. Estudia Diseño, es magnética y empática. Cuida a Alfonsina, aunque en la fiesta hace la suya. Esta noche su interés está en Lucio... y en pasarlo bien, cueste lo que cueste.',
            color: '#0922e3'
        },
        {
            name: 'Dante',
            thumb: Dante,
            miniThumb: DanteThumb,
            description: 'Amigo del barrio de Máximo, fue quien lo arrastró al mundo del techno y las fiestas más oscuras. No estudia, trabaja en un quiosco y se maneja solo desde chico. Esta noche, es él quien trae la droga. parece estar siempre un paso más allá, viviendo la suya.',
            color: '#c9ac2a'
        }
    ])

const selectedCharacter = ref(characters.value[0])

const selectCharacter = (character) => {
    selectedCharacter.value = character
}

watch(selectedCharacter, async (newCharacter, oldCharacter) => {
    if (newCharacter !== oldCharacter) {
        const scrollPosition = window.scrollY;
        await nextTick();
        setTimeout(() => {
            window.scrollTo(0, scrollPosition);
        }, 280);
    }
});
</script>

<template>
    <section class="characters">
        <div class="characters__container container">
            <div class="characters__selected-container">
                <div class="caracters__selected-imgcontainer">    
                    <transition name="fade">
                        <img :key="selectedCharacter" :src="selectedCharacter.thumb" alt="" class="characters__selected-image">
                    </transition>
                </div>
                <div :key="selectedCharacter" class="characters__selected-info">
                    <h2>{{ selectedCharacter.name }}</h2>
                    <div class="character__description-container">
                        <p>{{ selectedCharacter.description }}</p>
                    </div>
                </div>
                
            </div>
            
            <div class="characters-rooster__container container">
                <div class="characters-rooster__selection-container">
                    <h2>PERSONAJES</h2>
                    <ul class="characters-rooster__list">
                        <li @click="selectCharacter(character)" v-for="character in characters">
                            <img :src="character.miniThumb" :alt="character.name">
                            <p>{{ character.name }}</p>
                        </li>
                    </ul>
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
@use "@/style/animations"

.characters
    transition: background-image 0.3s
    background-image: linear-gradient(295deg, v-bind('selectedCharacter.color') 0%, hsl(270, 100%, 17%) 57%, hsl(270, 100%, 13%) 71%, hsl(270, 100%, 10%) 86%, hsl(270, 100%, 6%) 100%)
    padding-block: calc(variables.$section-gap * 3)
    color: colors.$light
    .characters__container
        @include mixins.flex(row-reverse, center, flex-start, nowrap)
        gap: 5rem

.characters-rooster__selection-container
    position: relative
    h2
        font-size: fonts.$font-xxl
        font-weight: bold
        line-height: 1
        margin-bottom: variables.$section-gap
    .characters-rooster__list
        @include mixins.grid(3, 2, center, center)
        gap: 1rem
        list-style: none
        padding-inline: 0
        max-width: 400px
        margin: 0 auto
        li
            cursor: pointer
            
            img
                width: 100%
                max-width: 150px
                height: auto
            p
                font-size: fonts.$font-base
                cursor: pointer
                transition: color 0.3s
            &:hover
                color: colors.$accent-light-2


.characters__selected-container
    @include mixins.flex(column, center, center, nowrap)
    width: 80%
    gap: 1rem
    background-color: none
    .caracters__selected-imgcontainer
        width: 100%
        height: auto
        max-height: 550px
        min-height: 350px
    .characters__selected-image
        width: 100%
    .characters__selected-info
        text-align: center
        h2
            font-size: fonts.$font-xxl
            font-weight: bold
        p
            font-size: fonts.$font-sm

@media (max-width: variables.$bkp-medium)
    .characters .characters__container
        gap: 2rem
        .characters__selected-container
            margin-top: 5rem
            width: 100%
            .characters__selected-info
                h2
                    font-size: fonts.$font-xl
    .characters-rooster__selection-container
        .characters-rooster__list
            grid-template-columns: repeat(2, 1fr)
            gap: 1rem


@media (max-width: variables.$bkp-small-medium)
    .characters .characters__container
        flex-direction: column-reverse
        .characters__selected-container
            margin-top: 0
        .caracters__selected-imgcontainer
            width: 70%
        .characters-rooster__selection-container
            .characters-rooster__list
                grid-template-columns: repeat(3, 1fr)
                gap: 2rem


.fade-enter-active, .fade-leave-active
    transition: opacity .25s ease-in-out
p.fade-leave-active, p.fade-enter-active
    position: absolute
.fade-enter-to, .fade-leave-to
    opacity: 0
</style>