<script setup>
import { ref } from 'vue';

const characters = ref([
        {
            name: 'Alfonsina',
            thumb: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            miniThumb: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            description: 'Siempre se asegura de que sus amigas lleguen a casa enteras. Estudia Psicología, no toca las drogas y, aunque es medio tímida, no tiene drama en decir lo que piensa. sufre de FOMO (miedo a perderse algo), por lo que sale más de lo que le gustaría. No se va de la fiesta, pero te deja clarísimo que quiere irse.',
            color: '#37c8d5'
        },
        {
            name: 'Máximo',
            thumb: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            miniThumb: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            description: 'El dueño de la casa. Siempre busca vivir al límite. Estudia ingeniería, pero eso no es lo que le importa, su verdadera prioridad es la noche, la adrenalina, la fiesta. Ex rugbier, extrovertido, lindo y competitivo.',
            color: '#08cd73'
        },
        {
            name: 'Franca',
            thumb: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
            miniThumb: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
            description: 'La líder no oficial del grupo, siempre buscando ser el centro de atención. Estudia Derecho, le encanta tener el control y con su carisma consigue (casi siempre) lo que quiere. Una pick me girl detrás de la atención masculina. ',
            color: '#e80404'
        },
        {
            name: 'Pipo',
            thumb: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
            miniThumb: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
            description: 'El primero en organizar los planes del finde. Fue compañero de las chicas en el colegio y es el mejor amigo de Franca. siempre sabe cómo hacer que todos se sientan incluidos. Ex rugbier y carismático, aunque a veces puede ser invasivo. Nunca piensa en las consecuencias, solo en el finde que viene.',
            color: '#d53782'
        },
        {
            name: 'Renata',
            thumb: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
            miniThumb: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
            description: 'Siempre tiene algo para contar y es la primera en llevarse bien con todos. Estudia Diseño, es magnética y empática. Cuida a Alfonsina, aunque en la fiesta hace la suya. Esta noche su interés está en Lucio... y en pasarlo bien, cueste lo que cueste.',
            color: '#0922e3'
        },
        {
            name: 'Dante',
            thumb: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
            miniThumb: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
            description: 'Amigo del barrio de Máximo, fue quien lo arrastró al mundo del techno y las fiestas más oscuras. No estudia, trabaja en un quiosco y se maneja solo desde chico. Esta noche, es él quien trae la droga. parece estar siempre un paso más allá, viviendo la suya.',
            color: '#c9ac2a'
        }
    ])

const selectedCharacter = ref(characters.value[0])

const selectCharacter = (character) => {
    selectedCharacter.value = character
}
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
                <transition name="fade">
                    <div :key="selectedCharacter" class="characters__selected-info">
                        <h2>{{ selectedCharacter.name }}</h2>
                        <p>{{ selectedCharacter.description }}</p>
                    </div>
                </transition>
                
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


.fade-enter-active, .fade-leave-active
    transition: opacity .25s ease-in-out


.fade-enter-to, .fade-leave-to
    opacity: 0
</style>