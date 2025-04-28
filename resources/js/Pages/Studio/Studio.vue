<script setup>
import App from "@/Layouts/App.vue";
import HeaderComponent from "@/Components/HeaderComponent.vue";
import Sidebar from "@/Components/Sidebar.vue";
import { router } from '@inertiajs/vue3'
import Circle from "@/Components/Circle.vue";
import Title from "@/Components/Title.vue";
import About from "@/Pages/Studio/Components/About.vue";
import Services from "@/Pages/Studio/Components/Services.vue";
import {
    PhotoIcon, VideoCameraIcon, WindowIcon

} from "@heroicons/vue/24/outline/index.js";
import Application from "@/Components/Application.vue";
import FooterComponent from "@/Components/FooterComponent.vue";

defineOptions({layout: App})

const description = 'Креативная студия, специализирующаяся на видеосъемке, профессиональном монтаже и разработке современных сайтов. Мы превращаем идеи в яркий визуальный контент, создаем динамичные ролики и стильные веб-проекты, которые привлекают аудиторию.'
const link = '/studio#application'
const label = 'Заказать услугу'

const services = [
    {
        id: 1,
        title: 'Монтаж видео',
        description: 'Наши специалисты обеспечивают стильный и профессиональный монтаж видео, который делает любой материал живым и привлекательным.',
        icon: PhotoIcon
    },
    {
        id: 2,
        title: 'Видеосъёмка',
        description: 'Используем профессиональное оборудование и продуманный сценарий, чтобы ваш видеоконтент был максимально эффективным и запоминающимся.',
        icon: VideoCameraIcon
    },
    {
        id: 3,
        title: 'Разработка сайтов',
        description: 'Создаем современные сайты, которые не просто красиво выглядят, но и отлично работают на бизнес-задачи наших клиентов. Сочетание привлекательного дизайна и максимальной эффективности',
        icon: WindowIcon
    },
]
</script>

<template>
    <div class="relative bg-dark-blue">
        <Circle/>
        <div class="z-10 h-full">
            <HeaderComponent title="Group 7024" :click="() => router.visit('/')"/>
            <div class="flex justify-between w-full">
                <Sidebar :click="() => router.visit('/')"/>
                <div class="flex flex-col w-[91%]">
                    <Title title="Studio 7024"/>
                    <About :label="label" :description="description" :link="link"/>
                    <Services :services="services"/>
                    <Application />
                </div>
            </div>
            <FooterComponent class="bg-dark-blue"/>
        </div>
    </div>
</template>
