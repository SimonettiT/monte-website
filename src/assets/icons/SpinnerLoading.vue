<script setup>
defineProps({
    color: {
        type: String,
        default: "text",
    },
})
</script>
<template>
    <div class="spinner"></div>
</template>

<style lang="sass" scoped>
@use "@/style/colors"
.spinner {
   width: 100%
   height: auto
   aspect-ratio: 1
   border-radius: 50%
   background: radial-gradient(farthest-side, colors.getColor("text") 94%,#0000) top/9px 9px no-repeat, conic-gradient(#0000 30%,#474bff)
   -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0)
   animation: spinner 1s infinite linear
}

@keyframes spinner {
   100% {
      transform: rotate(1turn);
   }
}
</style>