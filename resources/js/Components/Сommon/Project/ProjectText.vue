<script setup>
import ProjectIcon from "@/Components/Сommon/Project/ProjectIcon.vue";

defineProps({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String,
    }
})
</script>

<template>
    <div
        class="p-[40px] rounded-[7px] backdrop-blur-[100px] border border-white flex flex-col items-start gap-[20px] h-[290px] link item">
       <ProjectIcon>
           <slot/>
       </ProjectIcon>
        <div class="flex flex-col gap-[10px]">
            <h2 class="text-[64px] uppercase text-white leading-[120%] opacity-80">{{ name }}</h2>
            <p class="text-white leading-[140%] tracking-[1.5px] opacity-80">{{ description }}</p>
        </div>
    </div>
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
