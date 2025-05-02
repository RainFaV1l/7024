<script setup>
import {Link} from '@inertiajs/vue3'
import ServiceIcon from "@/Components/Service/ServiceIcon.vue";
import ServiceItem from "@/Components/Service/ServiceItem.vue";

defineProps({
    link: {
        required: true,
        type: String,
    },
    services: {
        required: true,
        type: Array,
    },
    icon: {
        required: true,
    }
})
</script>

<template>
    <Link :href="link" class="p-[30px] md:p-[40px] rounded-[7px] backdrop-blur-[100px] border border-white
            flex flex-col items-start gap-[30px] item cursor-pointer">
        <ServiceIcon class="size-[48px] md:size-[64px]">
            <Component :is="icon" class="size-[24px] md:size-[26px] text-white"/>
        </ServiceIcon>
        <h2 class="text-2xl md:text-4xl xl:text-5xl 2xl:text-[64px] uppercase text-white leading-[120%]">STUDIO <br class="hidden lg:block">7024</h2>
        <div class="flex flex-col gap-5">
            <div v-for="service in services" :key="service.id">
                <ServiceItem :name="service.name">
                    <ServiceIcon class="size-[40px] md:size-[45px]">
                        <Component :is="service.icon" class="size-[18px] md:size-[20px] text-white"/>
                    </ServiceIcon>
                </ServiceItem>
            </div>
        </div>
    </Link>
</template>

<style scoped>
.item {
    background-color: rgba(39, 40, 45, 0.7);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.25);
    transition: all .3s ease-in-out;
}

.item:hover {
    border-color: rgba(255, 255, 255, 1);
}
</style>
