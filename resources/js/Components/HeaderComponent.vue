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
    },
    isIndex: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<template>
    <div class="relative h-[68px] sm:h-[84px] md:min-h-[129px]">
        <div :class="isIndex ? 'absolute' : 'fixed'" class=" w-full z-10 backdrop-blur-2xl">
            <header class="p-[20px] md:p-[40px]">
                <button @click="click" class="text-xl sm:text-[32px] uppercase text-white cursor-pointer text-left" ref="logo">
                    {{ title }}
                </button>
            </header>
            <div class="w-full bg-white h-[1px] opacity-10"></div>
        </div>
    </div>
</template>

<style scoped>

</style>
