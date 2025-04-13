<script setup>
defineProps({
    click: {
        type: Function,
        required: false,
        default: '/'
    }
})
</script>

<template>
    <header class="p-[40px]">
        <button @click="click" class="text-[32px] uppercase text-white cursor-pointer link logo" ref="logo">
            GROUP 7024
        </button>
    </header>
    <div class="w-full bg-white h-[1px] opacity-10"></div>
</template>

<style scoped>

</style>
