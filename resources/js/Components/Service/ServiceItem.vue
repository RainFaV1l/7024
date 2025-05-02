<script setup>
defineProps({
    name: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <div class="flex items-center gap-[15px]">
        <slot/>
        <p class="text-sm md:text-base lg:text-lg leading-[140%] text-white opacity-80 tracking-[1.5px]">{{ name }}</p>
    </div>
</template>

<style scoped>

</style>
