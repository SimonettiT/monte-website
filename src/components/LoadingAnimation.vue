<script setup>

</script>
<template>
    <div class="loading__background">
        <div class="flipping">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
@use "@/style/mixins"
.loading__background
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(23, 33, 38, 0.8)
    z-index: 9999
    @include mixins.flex(column, center, center, nowrap)

.flipping
   width: 86.4px
   height: 86.4px
   display: grid
   grid-template-columns: repeat(3, 1fr)
   grid-template-rows: repeat(3, 1fr)


.flipping div
   animation: flipping-18i5bq 1.5s calc(var(--delay) * 1s) infinite backwards
   background-color: #fff


.flipping div:nth-child(1)
   --delay: 0.1


.flipping div:nth-child(2)
   --delay: 0.2


.flipping div:nth-child(3)
   --delay: 0.3


.flipping div:nth-child(4)
   --delay: 0.4


.flipping div:nth-child(5)
   --delay: 0.5


.flipping div:nth-child(6)
   --delay: 0.6


.flipping div:nth-child(7)
   --delay: 0.7


.flipping div:nth-child(8)
   --delay: 0.8


.flipping div:nth-child(9)
   --delay: 0.9


@keyframes flipping-18i5bq
   0%
      transform: perspective(86.4px) rotateX(-90deg)
   

   50%, 75%
      transform: perspective(86.4px) rotateX(0)
   

   100%
      opacity: 0
      transform: perspective(86.4px) rotateX(0)
   

</style>