<script setup>
import { ref } from 'vue';

const characters = ref([
        {
            name: 'Rick Sanchez',
            thumb: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            miniThumb: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            description: 'El personaje principal de la serie, es un científico loco que arrastra a su tímido nieto Morty en peligrosas aventuras por el espacio y dimensiones paralelas.'
        },
        {
            name: 'Morty Smith',
            thumb: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            miniThumb: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            description: 'Es el nieto de Rick, un niño tímido y poco seguro de sí mismo que siempre acompaña a su abuelo en sus aventuras.'
        },
        {
            name: 'Summer Smith',
            thumb: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
            miniThumb: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
            description: 'Es la hermana mayor de Morty y la nieta de Rick, es una adolescente que se preocupa por su imagen y su popularidad en la escuela.'
        },
        {
            name: 'Jerry Smith',
            thumb: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
            miniThumb: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
            description: 'Es el padre de Morty y el yerno de Rick, es un hombre inseguro y poco inteligente que trabaja en una empresa de publicidad.'
        },
        {
            name: 'Beth Smith',
            thumb: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
            miniThumb: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
            description: 'Es la madre de Morty y la hija de Rick, es una cirujana de caballos que se siente frustrada por su matrimonio con Jerry.'
        },
        {
            name: 'Birdperson',
            thumb: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
            miniThumb: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
            description: 'Es un amigo de Rick que es mitad pájaro y mitad persona, es un guerrero que ha luchado en muchas batallas.'
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
                <transition name="fade">
                    <img :key="selectedCharacter" :src="selectedCharacter.thumb" alt="" class="characters__selected-image">
                </transition>
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
    background-image: linear-gradient(295deg, hsl(270, 100%, 31%) 0%, hsl(270, 100%, 28%) 14%, hsl(270, 100%, 24%) 29%, hsl(270, 100%, 21%) 43%, hsl(270, 100%, 17%) 57%, hsl(270, 100%, 13%) 71%, hsl(270, 100%, 10%) 86%, hsl(270, 100%, 6%) 100%)
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
    .characters__selected-image
        width: 100%
        height: auto
        min-height: 350px
    .characters__selected-info
        text-align: center
        h2
            font-size: fonts.$font-xxl
            font-weight: bold
        p
            font-size: fonts.$font-base


.fade-enter-active, .fade-leave-active
    transition: opacity .25s ease-in-out


.fade-enter-to, .fade-leave-to
    opacity: 0
</style>