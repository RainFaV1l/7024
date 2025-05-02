<script setup>
defineProps({
    services: {
        type: Array,
        required: true,
    }
})
</script>

<template>
    <div class="flex justify-between">
        <div class="px-[20px] md:px-[40px] py-[40px] w-full">
            <h2 class="uppercase text-4xl text-white">Наши услуги</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 mt-[40px] gap-[30px]">
                <div v-for="service in services" :key="service.id" class="col-span-1 lg:last:col-span-2 flex flex-col gap-[20px] md:gap-[30px] p-[30px] md:p-[40px]
                transition-all duration-300 ease-in-out
                border border-service-border hover:border-white
                 backdrop-blur-[100px] rounded-[7px]">
                    <div class="flex rounded-[7px] items-center justify-center size-[64px]
                    border border-service-border shadow-inner-service">
                        <Component :is="service.icon" class="size-[20px] text-white"/>
                    </div>
                    <div class="flex flex-col gap-[15px]">
                        <h3 class="text-xl sm:text-3xl md:text-4xl text-white">{{ service.title }}</h3>
                        <p class="text-sm sm:text-base md:text-lg leading-[150%] tracking-[2px] text-white opacity-80 w-full 2xl:w-[600px]">{{ service.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
