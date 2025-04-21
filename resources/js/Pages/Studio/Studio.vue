<script setup>
import App from "@/Layouts/App.vue";
import HeaderComponent from "@/Components/HeaderComponent.vue";
import Sidebar from "@/Components/Sidebar.vue";
import { router } from '@inertiajs/vue3'
import Circle from "@/Components/Circle.vue";
import Title from "@/Components/Title.vue";
import About from "@/Pages/Studio/Components/About.vue";
import Services from "@/Pages/Studio/Components/Services.vue";

defineOptions({layout: App})

const description = 'Креативная студия, специализирующаяся на видеосъемке, профессиональном монтаже и разработке современных сайтов. Мы превращаем идеи в яркий визуальный контент, создаем динамичные ролики и стильные веб-проекты, которые привлекают аудиторию.'
const link = '/#application'
const label = 'Заказать услугу'
</script>

<template>
    <div class="relative bg-dark-blue">
        <Circle/>
        <div class="z-10 h-full">
            <HeaderComponent title="Studio 7024" :click="() => router.visit('/')"/>
            <div class="flex justify-between">
                <Sidebar :click="() => router.visit('/')"/>
                <div class="flex flex-col">
                    <Title title="STUDIO 7024"/>
                    <About :label="label" :description="description" :link="link"/>
                    <Services/>
                </div>
            </div>
        </div>
    </div>
</template>
