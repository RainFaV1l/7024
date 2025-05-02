<script setup>
import App from "@/Layouts/App.vue";
import HeaderComponent from "@/Components/HeaderComponent.vue";
import Sidebar from "@/Components/Sidebar.vue";
import { router } from '@inertiajs/vue3'
import Circle from "@/Components/Circle.vue";
import Title from "@/Components/Title.vue";
import About from "@/Pages/Dilesta/Components/About.vue";
import Services from "@/Pages/Dilesta/Components/Services.vue";
import {
    PhotoIcon, RocketLaunchIcon, HomeModernIcon

} from "@heroicons/vue/24/outline/index.js";
import Application from "@/Components/Application.vue";
import FooterComponent from "@/Components/FooterComponent.vue";

defineOptions({layout: App})

const description = 'Проектирование и строительство зданий и сооружений'
const longDescription = 'Мы – команда профессионалов с многолетним опытом в проектировании и строительстве объектов различного назначения. Наши проекты отличаются инновационным подходом, качеством и надежностью!'
const link = '/dilesta#application'
const label = 'Консультация'

const services = [
    {
        id: 1,
        title: 'Проектирование',
        description: 'Разработка архитектурных и инженерных проектов с учетом всех норм и требований.',
        icon: PhotoIcon
    },
    {
        id: 2,
        title: 'Строительство',
        description: 'Комплексное строительство объектов «под ключ» с контролем качества на каждом этапе.',
        icon: RocketLaunchIcon
    },
    {
        id: 3,
        title: 'Комплексные решения',
        description: 'Полное сопровождение проекта от идеи до сдачи объекта в эксплуатацию.',
        icon: HomeModernIcon
    },
]
</script>

<template>
    <div class="relative bg-dilesta-dark">
        <Circle/>
        <div class="z-10 h-full">
            <HeaderComponent title="Group 7024" :click="() => router.visit('/')"/>
            <div class="grid lg:grid-cols-[181px_1fr] h-full">
                <Sidebar :click="() => router.visit('/#companies')"/>
                <div class="flex flex-col w-full">
                    <Title title="Dilesta"/>
                    <About :label="label" :description="description" :link="link" :long-description="longDescription" position="center"/>
                    <Services :services="services"/>
                    <Application/>
                </div>
            </div>
            <FooterComponent class="bg-dilesta-dark"/>
        </div>
    </div>
</template>
