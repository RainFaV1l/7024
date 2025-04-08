<script setup>
import GroupSection from "@/Components/Sections/GroupSection.vue";
import MainSection from "@/Components/Sections/CompaniesSection.vue";
import gsap from 'gsap';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import App from "@/Layouts/App.vue";

gsap.registerPlugin(ScrollToPlugin);

const scrollToNextSection = () => {
    const container = document.querySelector('.animation-container');
    const sections = gsap.utils.toArray('.section');

    const currentScroll = container.scrollTop;
    let nextSection = sections.find(section => section.offsetTop > currentScroll);
    if (!nextSection) {
        nextSection = sections[sections.length - 1];
    }

    gsap.to(container, {
        scrollTo: { y: nextSection.offsetTop, container: container, autoKill: false },
        duration: 1,
        ease: "power1.inOut"
    });
};

defineOptions({ layout: App })
</script>

<template>
    <div class="animation-container scroll-smooth" style="overflow-y: scroll; height: 100vh;">
        <div @click="scrollToNextSection" class="w-full">
            <GroupSection />
        </div>
        <section class="section">
            <MainSection />
        </section>
    </div>
</template>

<style>
html, body {
    margin: 0;
    overflow: hidden; /* отключаем нативный скролл страницы */
}

/* Скрытие скроллбара (опционально) */
::-webkit-scrollbar {
    display: none;
}
</style>
