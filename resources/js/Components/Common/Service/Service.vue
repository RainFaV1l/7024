<script setup>
import {Link} from '@inertiajs/vue3'
import ServiceIcon from "@/Components/Common/Service/ServiceIcon.vue";
import ServiceItem from "@/Components/Common/Service/ServiceItem.vue";

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
    <Link :href="link" class="p-[40px] rounded-[7px] backdrop-blur-[100px] border border-white
            flex flex-col items-start gap-[30px] item cursor-pointer">
        <ServiceIcon>
            <Component :is="icon" class="size-[26px] text-white"/>
        </ServiceIcon>
        <h2 class="text-[64px] uppercase text-white leading-[120%]">STUDIO<br>7024</h2>
        <div class="flex flex-col gap-5">
            <div v-for="service in services" :key="service.id">
                <Link :href="service.link">
                    <ServiceItem :name="service.name">
                        <ServiceIcon :size="45">
                            <Component :is="service.icon" class="size-[20px] text-white"/>
                        </ServiceIcon>
                    </ServiceItem>
                </Link>
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
