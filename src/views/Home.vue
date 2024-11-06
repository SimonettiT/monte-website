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
import FinancingCalltoAction from "@/components/FinancingCalltoAction.vue";

</script>

<template>
	<main>
		
		<section class="home-content">
			<header>
				<Cover />
			</header>
			<ChaptersAccess />
			<Synopsis background="#100020" textcolor="#f2f2f2"/>
			<MontePreviews title="FOTOGRAMAS DE LA SERIE WEB"/>
			<FinancingCalltoAction />
			<CharacterDetails />
			<BackstageCalltoAction />
			<SpotifyPlaylist 
				title="ESCUCHÁ LA FIESTA"
				subtitle="EL RITMO DE MONTE"
				description="La noche es más intensa con la música adecuada, y esta noche suena un musicón. Escuchá la playlist de la fiesta y entendé porqué nadie puede dejar de bailar."
				spotify-embed="https://open.spotify.com/embed/playlist/7mroeAWyuDwVIdG3UWajlJ?utm_source=generator&theme=0"
				spotify-link="https://open.spotify.com/playlist/7mroeAWyuDwVIdG3UWajlJ?si=aab21b92466c4046"
			/>
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
