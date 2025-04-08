<script setup>
import {Link} from '@inertiajs/vue3'
import {CameraIcon, PhotoIcon, VideoCameraIcon, GlobeAltIcon} from "@heroicons/vue/24/outline/index.js";
import ProjectIcon from "@/Components/Сommon/Project/ProjectIcon.vue";
import ProjectItem from "@/Components/Сommon/Project/ProjectItem.vue";
</script>

<template>
    <div
        class="p-[40px] h-[613px] rounded-[7px] backdrop-blur-[100px] border border-white flex flex-col items-start gap-[30px] link item">
       <ProjectIcon>
           <CameraIcon class="size-[26px] text-white"/>
       </ProjectIcon>
        <h2 class="text-[64px] uppercase text-white leading-[120%]">STUDIO 7024</h2>
        <div class="flex flex-col gap-5">
            <Link href="/">
                <ProjectItem name="Монтаж">
                    <ProjectIcon :size="45">
                        <PhotoIcon class="size-[20px] text-white"/>
                    </ProjectIcon>
                </ProjectItem>
            </Link>
            <Link href="/">
                <ProjectItem name="Видеосъемка">
                    <ProjectIcon :size="45">
                        <VideoCameraIcon class="size-[20px] text-white"/>
                    </ProjectIcon>
                </ProjectItem>
            </Link>
            <Link href="/">
                <ProjectItem name="Разработка сайтов">
                    <ProjectIcon :size="45">
                        <GlobeAltIcon class="size-[20px] text-white"/>
                    </ProjectIcon>
                </ProjectItem>
            </Link>
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
