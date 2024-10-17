<script setup>
import { ref } from "@vue/reactivity";
import CharacterDetails from '@/components/CharacterDetails.vue'
import Synopsis from '@/components/Synopsis.vue'
import Cover from "@/components/Cover.vue";
import ChaptersAccess from "@/components/ChaptersAccess.vue";
import MontePreviews from '@/components/MontePreviews.vue';

</script>

<template>
	<main>
		
		<section class="home-content">
			<Cover />
			<ChaptersAccess />
			<Synopsis />
			<MontePreviews />
			<CharacterDetails />
		</section>
	</main>
</template>

<style lang="sass" scoped>
@use '@/style/colors'
@use '@/style/fonts'
@use '@/style/mixins'
@use '@/style/variables'

.home-content
    padding-bottom: 80px
    min-height: 100vh

</style>
