<script setup>
import {Link} from "@inertiajs/vue3";
import {ArrowUpRightIcon} from "@heroicons/vue/24/outline/index.js";

defineProps({
    link: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-col gap-[15px] group">
        <div class="w-full bg-white h-[1px] opacity-10"></div>
        <Link href="/public" class="px-[30px] flex items-center justify-between">
            <p class="text-lg text-white opacity-80 leading-[150%] tracking-[2px]">{{ name }}</p>
            <div class="relative flex items-center">
                <ArrowUpRightIcon class="absolute top-1/2 -translate-1/2 size-[20px]
            text-white opacity-80 icon transition-all duration-300 ease-in-out
            group-hover:-translate-y-[75%]"/>
            </div>
        </Link>
    </div>
</template>
