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
            <header class="p-[20px] md:p-[40px] flex justify-between">
                <div class="cursor-pointer lg:hidden" @click="click">
                    <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM43 7L1 7V9L43 9V7Z" fill="white" fill-opacity="0.8"/>
                    </svg>
                </div>
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
