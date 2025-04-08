<script setup>
defineProps({
    size: {
        type: Number,
        required: false,
        default: 64
    }
})
</script>

<template>
    <div :style="{ width: size + 'px', height: size + 'px' }"
         style="
          background-color: rgba(39, 40, 45, 0.01);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.25);
        " class="rounded-[7px] border border-white flex justify-center items-center
    ">
        <slot/>
    </div>
</template>

<style scoped>

</style>
