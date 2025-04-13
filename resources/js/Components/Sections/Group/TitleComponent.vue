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
    <div class="flex flex-col gap-[10px] text-left cursor-pointer">
        <h1 class="uppercase text-8xl text-white link">{{ title }}</h1>
        <p class="ml-1 text-white opacity-80 text-lg">{{ subtitle }}</p>
    </div>
</template>
