<script setup>
defineProps({
    title: {
        required: true,
        type: String,
    },
    subtitle: {
        required: true,
        type: String,
    }
})
</script>

<template>
    <div class="flex flex-col gap-[10px] cursor-pointer text-left">
        <h1 class="uppercase text-4xl sm:text-6xl md:text-8xl text-white link">{{ title }}</h1>
        <p class="ml-1 text-white opacity-80 text-sm sm:text-base md:text-lg">{{ subtitle }}</p>
    </div>
</template>
