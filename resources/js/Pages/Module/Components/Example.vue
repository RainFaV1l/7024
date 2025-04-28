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
    <div class="flex justify-between">
        <div class="flex flex-col justify-between basis-[50.05%]">
            <div class="flex flex-col gap-[30px] border-r border-r-dark-border py-[40px] px-[40px]">
                <h2 class="uppercase text-4xl text-white">{{ title }}</h2>
                <p class="text-white opacity-80 leading-[150%] tracking-[2px]">{{ description }}</p>
            </div>
            <ArrowLink name="Смотреть все" link="" class="pb-[15px]"/>
        </div>
        <div class="flex flex-col justify-between basis-[50%]">
            <div class="h-[464px] w-[710px]">
                <img :src="exampleImage" alt="Пример" class="h-full w-full object-cover block">
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
