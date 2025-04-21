<script setup>
import {Link} from '@inertiajs/vue3'
import ServiceIcon from "@/Components/Service/ServiceIcon.vue";

defineProps({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String,
    },
    link: {
        required: true,
        type: String,
    }
})
</script>

<template>
    <Link :href="link"
        class="p-[40px] rounded-[7px] backdrop-blur-[100px]
        border border-white flex flex-col items-start gap-[20px] h-full item cursor-pointer">
       <ServiceIcon>
           <slot/>
       </ServiceIcon>
        <div class="flex flex-col gap-[10px]">
            <h2 class="text-[64px] uppercase text-white leading-[120%] opacity-80">{{ name }}</h2>
            <p class="text-white leading-[140%] tracking-[1.5px] opacity-80">{{ description }}</p>
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
