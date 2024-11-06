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

import Frame1 from '@/assets/images/frames/frame-01.jpg';
import Frame1Thumb from '@/assets/images/frames/frame-01-thumb.jpg';
import Frame2 from '@/assets/images/frames/frame-02.jpg';
import Frame2Thumb from '@/assets/images/frames/frame-02-thumb.jpg';
import Frame3 from '@/assets/images/frames/frame-03.jpg';
import Frame3Thumb from '@/assets/images/frames/frame-03-thumb.jpg';
import Frame4 from '@/assets/images/frames/frame-04.jpg';
import Frame4Thumb from '@/assets/images/frames/frame-04-thumb.jpg';
import Frame5 from '@/assets/images/frames/frame-05.jpg';
import Frame5Thumb from '@/assets/images/frames/frame-05-thumb.jpg';
import Frame6 from '@/assets/images/frames/frame-06.jpg';
import Frame6Thumb from '@/assets/images/frames/frame-06-thumb.jpg';

const frames = ref([
    {
        id: 1,
        src: Frame1,
        thumbSrc: Frame1Thumb
    },
    {
        id: 2,
        src: Frame2,
        thumbSrc: Frame2Thumb
    },
    {
        id: 3,
        src: Frame3,
        thumbSrc: Frame3Thumb
    },
    {
        id: 4,
        src: Frame4,
        thumbSrc: Frame4Thumb
    },
    {
        id: 5,
        src: Frame5,
        thumbSrc: Frame5Thumb
    },
    {
        id: 6,
        src: Frame6,
        thumbSrc: Frame6Thumb
    }
])
</script>

<template>
	<main>
		
		<section class="home-content">
			<header>
				<Cover />
			</header>
			<ChaptersAccess />
			<Synopsis background="#100020" textcolor="#f2f2f2"/>
			<MontePreviews title="FOTOGRAMAS DE LA SERIE WEB" :frames="frames"/>
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
