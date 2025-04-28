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
        <div class="p-[40px] w-full">
            <h2 class="uppercase text-4xl text-white">Наши услуги</h2>
            <div class="mt-[40px] flex flex-wrap gap-[30px]">
                <div v-for="service in services" :key="service.id" class="flex flex-col gap-[30px] p-[40px] pb-[70px]
                transition-all duration-300 ease-in-out w-[49%] last:w-[100%]
                border border-service-border hover:border-white backdrop-blur-[100px] rounded-[7px]">
                    <div class="flex rounded-[7px] items-center justify-center size-[64px] border border-service-border shadow-inner-service">
                        <Component :is="service.icon" class="size-[20px] text-white"/>
                    </div>
                    <div class="flex flex-col gap-[15px]">
                        <h3 class="text-4xl text-white">{{ service.title }}</h3>
                        <p class="text-lg leading-[150%] tracking-[2px] text-white opacity-80 w-[600px]">{{ service.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
