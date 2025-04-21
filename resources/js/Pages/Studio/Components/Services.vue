<script setup>
import {PhotoIcon} from "@heroicons/vue/24/outline/index.js";
</script>

<template>
    <div class="flex justify-between">
        <div class="basis-[67.25%] p-[40px] border-r border-r-dark-border">
            <h2 class="uppercase text-4xl text-white">Наши услуги</h2>
            <div class="mt-[40px] flex flex-col gap-[30px]">
                <div class="flex flex-col gap-[30px] p-[40px] border border-service-border backdrop-blur-[100px] rounded-[7px]">
                    <div class="flex rounded-[7px] items-center justify-center size-[64px] border border-service-border shadow-inner-service">
                        <PhotoIcon class="size-[20px] text-white"/>
                    </div>
                    <div class="flex flex-col gap-[15px]">
                        <h3 class="text-4xl text-white">Монтаж видео</h3>
                        <p class="text-lg leading-[140%] tracking-[1.5px] text-white opacity-80">Наши специалисты обеспечивают стильный и профессиональный монтаж видео, который делает любой материал живым и привлекательным.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="basis-[33%]"></div>
    </div>
</template>
