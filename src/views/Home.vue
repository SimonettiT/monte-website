<script setup>
import { ref } from "@vue/reactivity";
import CharacterDetails from '@/components/CharacterDetails.vue'
import Synopsis from '@/components/Synopsis.vue'
import Cover from "@/components/Cover.vue";
import ChaptersAccess from "@/components/ChaptersAccess.vue";
import MontePreviews from '@/components/MontePreviews.vue';
import BackstageCalltoAction from "@/components/BackstageCalltoAction.vue";
import SpotifyPlaylist from "@/components/SpotifyPlaylist.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
	<main>
		
		<section class="home-content">
			<header>
				<Cover />
			</header>
			<ChaptersAccess />
			<Synopsis />
			<MontePreviews title="FOTOGRAMAS DE LA SERIE WEB"/>
			<CharacterDetails />
			<BackstageCalltoAction />
			<SpotifyPlaylist />
		</section>
	</main>
</template>

<style lang="sass" scoped>
@use '@/style/colors'
@use '@/style/fonts'
@use '@/style/mixins'
@use '@/style/variables'

.home-content
    min-height: 100vh

</style>
