<script setup>
import App from "@/Layouts/App.vue";
import HeaderComponent from "@/Components/HeaderComponent.vue";
import Sidebar from "@/Components/Sidebar.vue";
import { router } from '@inertiajs/vue3'
import Circle from "@/Components/Circle.vue";
import Title from "@/Components/Title.vue";
import About from "@/Pages/Module/Components/About.vue";
import {
    PhotoIcon, RocketLaunchIcon, HomeModernIcon

} from "@heroicons/vue/24/outline/index.js";
import Application from "@/Components/Application.vue";
import FooterComponent from "@/Components/FooterComponent.vue";
import Example from "@/Pages/Module/Components/Example.vue";

defineOptions({layout: App})

const description = 'Быстро.<br>Надежно.<br>Инновационно.'
const longDescription = '«Модульные здания» – это современное решение для создания жилых, коммерческих и промышленных объектов. Благодаря заводской сборке основных конструкций, сокращаются сроки строительства и снижаются затраты, не теряя при этом в качестве и долговечности. '
const link = '/module#application'
const label = 'Заказать услугу'

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
    <div class="relative bg-module-dark">
        <Circle/>
        <div class="z-10 h-full">
            <HeaderComponent title="Group 7024" :click="() => router.visit('/')"/>
            <div class="flex justify-between w-full">
                <Sidebar :click="() => router.visit('/')"/>
                <div class="flex flex-col w-[91%]">
                    <Title title="Module"/>
                    <About :label="label" :description="description" :link="link" :long-description="longDescription"/>
                    <Example title="Примеры работ"
                             description="Мы адаптируем проекты под индивидуальные потребности заказчика,
                             гарантируя высокие стандарты надежности и энергоэффективности."
                             link=""/>
                    <Application/>
                </div>
            </div>
            <FooterComponent class="bg-module-dark"/>
        </div>
    </div>
</template>
