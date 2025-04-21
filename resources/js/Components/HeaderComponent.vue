<script setup>
defineProps({
    click: {
        type: Function,
        required: true,
    },
    title: {
        type: String,
        required: false,
        default: 'GROUP 7024'
    }
})
</script>

<template>
    <header class="p-[40px]">
        <button @click="click" class="text-[32px] uppercase text-white cursor-pointer" ref="logo">
            {{ title }}
        </button>
    </header>
    <div class="w-full bg-white h-[1px] opacity-10"></div>
</template>

<style scoped>

</style>
