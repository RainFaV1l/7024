<script setup>
import Circle from "@/Components/Circle.vue";
import HeaderComponent from "@/Components/HeaderComponent.vue";
import gsap from "gsap";
import Sidebar from "@/Components/Sidebar.vue";
import {
    BuildingOfficeIcon, CameraIcon,
    GlobeAltIcon,
    HomeModernIcon,
    PhotoIcon,
    VideoCameraIcon
} from "@heroicons/vue/24/outline/index.js";
import ServiceText from "@/Components/Service/ServiceText.vue";
import Service from "@/Components/Service/Service.vue";

const services = [
    {
        id: 1,
        name: 'Монтаж',
        icon: PhotoIcon,
        link: '/',
    },
    {
        id: 2,
        name: 'Видеосъемка',
        icon:  VideoCameraIcon,
        link: '/',
    },
    {
        id: 3,
        name: 'Разработка сайтов',
        icon: GlobeAltIcon,
        link: '/',
    },
]

const scrollToPreviousSection = () => {
    const container = document.querySelector('.animation-container');
    const sections = gsap.utils.toArray('.section');

    const currentScroll = container.scrollTop;
    let prevSection = sections.find(section => section.offsetTop < currentScroll);

    if (!prevSection) {
        prevSection = sections[0];
    }

    gsap.to(container, {
        scrollTo: { y: prevSection.offsetTop, container: container, autoKill: false },
        duration: 1,
        ease: "power1.inOut"
    });
};
</script>

<template>
    <section class="relative h-dvh bg-dark overflow-hidden section">
        <Circle/>
        <div class="z-10 h-full">
            <HeaderComponent :click="scrollToPreviousSection" :is-index="true"/>
            <div class="h-full flex justify-between">
                <Sidebar :click="scrollToPreviousSection" :is-index="true"/>
                <div class="grid grid-cols-3 p-[40px] gap-[30px] h-[87%] w-full">
                    <Service link="/studio" :services="services" :icon="CameraIcon"/>
                    <div class="col-span-2 flex flex-col gap-[30px]">
                        <ServiceText link="/dilesta" description="Проектирование и строительство зданий и сооружений" name="DILESTA"><BuildingOfficeIcon class="size-[26px] text-white"/></ServiceText>
                        <ServiceText link="/module" description="Строительство модульных зданий" name="MODULE"><HomeModernIcon class="size-[26px] text-white"/></ServiceText>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
