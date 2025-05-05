<script setup>
</script>

<template>
    <div class="circle-wrapper">
        <div class="circle"></div>
    </div>
</template>

<style>
@media screen and (min-width: 480px) {
    .circle-wrapper {
        width: 400px;
        height: 400px;
    }
}

.circle-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    z-index: 0;
    pointer-events: none;
}

.circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: white;
    filter: blur(500px);
}
</style>
