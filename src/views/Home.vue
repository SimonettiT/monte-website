<script setup>
import { ref } from "@vue/reactivity";
import Cover from "@/components/Cover.vue";

</script>

<template>
	<main>
		
		<section class="home-content">
			<Cover />
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
