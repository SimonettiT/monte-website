<script setup>
import { onMounted, ref } from "vue";
import CloseIcon from "@/assets/icons/Close.vue";
defineProps({
	videoURL: {
		type: String,
		required: true,
	},
	videoTitle: {
		default: "Video Player",
		type: String,
	},
});

const modal = ref(null);
onMounted(() => {
	modal.value.focus();
});
</script>
<template>
	<Teleport to='body'>
		<div
			class="video-background"
			@click.self="$emit('closeVideoModal')"
			@keyup.esc="$emit('closeVideoModal')"
			ref="modal"
			tabindex="0"
		>
			<button class="modal-close__button" @click="$emit('closeVideoModal')">
				<CloseIcon class="modal-close__icon" />
			</button>
			<iframe
				:src="
					'https://www.youtube-nocookie.com/embed/' +
					videoURL +
					'?controls=2&autoplay=1'
				"
				:title="videoTitle"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			>
			</iframe>
		</div>
	</Teleport>
</template>

<style lang="sass" scoped>
@use '@/style/colors'
@use '@/style/variables'
.video-background
    top: 0
    left: 0
    position: fixed
    width: 100%
    height: 100%
    background: rgba(23, 33, 38, 0.8)
    z-index: variables.$z-modal-background
    display: flex
    align-items: center
    justify-content: center
    overflow: hidden
    iframe
        aspect-ratio: 16/9
        width: 80%
.modal-close__button
  position: absolute
  top: 2rem
  right: 2rem
  width: 3rem
  height: 3rem
  background-color: transparent
  border: none
  cursor: pointer
  z-index: variables.$z-modal-above
  .modal-close__icon
    color: colors.$white
</style>
