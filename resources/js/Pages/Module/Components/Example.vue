<script setup>
import exampleImage from '@/assets/images/example.jpg'
import ArrowLink from "@/Components/ArrowLink.vue";

const props = defineProps({
    link: {
        type: [String, Function],
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="flex justify-between flex-col xl:flex-row border-b border-dark-border">
        <div class="flex flex-col justify-between basis-[50.05%]">
            <div class="flex flex-col gap-[30px] border-r border-r-dark-border px-[20px] py-[40px] md:px-[40px]">
                <h2 class="uppercase text-xl sm:text-3xl md:text-4xl text-white">{{ title }}</h2>
                <p class="text-sm sm:text-base md:text-lg text-white opacity-80 leading-[150%] tracking-[2px]">{{ description }}</p>
            </div>
            <ArrowLink name="Смотреть все" link="" class="pb-[15px] border-b border-b-dark-border"/>
        </div>
        <div class="flex flex-col justify-between basis-[50%] px-[20px] md:px-[40px] py-[40px] xl:m-0">
            <div class="h-full md:h-[464px] w-full xl:w-[710px]">
                <img :src="exampleImage" alt="Пример" class="h-full w-full object-cover object-left xl:object-center block rounded xl:rounded-none">
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
