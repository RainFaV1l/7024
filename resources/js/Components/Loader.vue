<script setup>
import { ref, onMounted } from 'vue';
import video from '@/assets/video/loader.mp4';

const showLoader = ref(true);      // Показывает блок с видео
const isFadingOut = ref(false);    // Плавное исчезновение
const showContent = ref(false);    // Показывает контент

onMounted(() => {
    // Через 3 секунды начинаем исчезновение
    setTimeout(() => {
        isFadingOut.value = true;

        // Через 1 секунду (анимация завершилась) — показываем контент и убираем видео
        setTimeout(() => {
            showLoader.value = false;
            showContent.value = true;
        }, 1000);
    }, 3000);

});
</script>

<template>
    <!-- Видео-лоадер -->
    <div
        v-if="showLoader"
        :class="[
      'fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000',
      isFadingOut ? 'opacity-0' : 'opacity-100'
    ]"
    >
        <video
            ref="loaderVideo"
            class="h-[70%] sm:w-full sm:h-full object-cover"
            autoplay
            muted
            playsinline
        >
            <source :src="video" type="video/mp4" />
        </video>
    </div>
</template>

<style scoped>
body {
    background-color: #111; /* тёмный фон для сайта */
}
</style>
