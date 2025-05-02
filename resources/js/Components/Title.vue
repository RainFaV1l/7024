<script setup>
    const props = defineProps({
        title: {
            required: true,
            type: String,
        }
    })
</script>

<template>
    <div class="w-full">
        <div class="px-[20px] py-[40px] md:px-[40px] w-full">
            <h1 class="uppercase text-3xl sm:text-5xl md:text-[64px] text-white">{{ props.title }}</h1>
        </div>
        <div class="w-full bg-white h-[1px] opacity-10"></div>
    </div>
</template>
