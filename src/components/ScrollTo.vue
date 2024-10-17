<script setup>
defineProps({
    href: {
        type: String,
        default: '#'
    },
    title: {
        type: String,
        required: true
    },
})

const scrollTo = (element) => {
    document.querySelector(element).scrollIntoView({ behavior: 'smooth' })
}
</script>
<template>
        <a :title="title" :href="href" @click.prevent="scrollTo(href)">
            <slot>

            </slot>
        </a>
</template>