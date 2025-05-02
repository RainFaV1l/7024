<script setup>
defineProps({
    services: {
        type: Array,
        required: true,
    }
})
</script>

<template>
    <div class="flex flex-col md:flex-row justify-between">
        <div class="basis-[100%] md:basis-[67.25%] px-[20px] md:px-[40px] py-[40px] border-r border-r-dark-border">
            <h2 class="uppercase text-xl sm:text-3xl md:text-4xl text-white">Наши услуги</h2>
            <div class="mt-[40px] flex flex-col gap-[20px] md:gap-[30px]">
                <div v-for="service in services" :key="service.id" class="flex flex-col gap-[20px] md:gap-[30px] p-[30px] md:p-[40px]
                transition-all duration-300 ease-in-out
                border border-service-border hover:border-white backdrop-blur-[100px] rounded-[7px]">
                    <div class="flex rounded-[7px] items-center justify-center size-[64px] border border-service-border shadow-inner-service">
                        <Component :is="service.icon" class="size-[18px] md:size-[20px] text-white"/>
                    </div>
                    <div class="flex flex-col gap-[15px]">
                        <h3 class="text-xl sm:text-3xl md:text-4xl text-white">{{ service.title }}</h3>
                        <p class="text-sm sm:text-base md:text-lg leading-[150%] tracking-[2px] text-white opacity-80">{{ service.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="basis-[33%]"></div>
    </div>
</template>
