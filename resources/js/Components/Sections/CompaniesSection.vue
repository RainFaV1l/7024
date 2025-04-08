<script setup>
import CircleComponent from "@/Components/Сommon/CircleComponent.vue";
import HeaderComponent from "@/Components/Сommon/HeaderComponent.vue";
import gsap from "gsap";
import SidebarComponent from "@/Components/Сommon/SidebarComponent.vue";
import {BuildingOfficeIcon, HomeModernIcon} from "@heroicons/vue/24/outline/index.js";
import Project from "@/Components/Сommon/Project/Project.vue";
import ProjectText from "@/Components/Сommon/Project/ProjectText.vue";

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
        <CircleComponent/>
        <div class="z-10">
            <HeaderComponent :click="scrollToPreviousSection"/>
            <div class="flex justify-between">
                <SidebarComponent :click="scrollToPreviousSection"/>
                <div class="grid grid-cols-3 p-[40px] gap-[30px]">
                    <Project/>
                    <div class="col-span-2 flex flex-col gap-[30px]">
                        <ProjectText description="Проектирование и строительство зданий и сооружений" name="DILESTA"><BuildingOfficeIcon class="size-[26px] text-white"/></ProjectText>
                        <ProjectText description="Строительство модульных зданий" name="MODULE"><HomeModernIcon class="size-[26px] text-white"/></ProjectText>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
