<script setup>
import App from "@/Layouts/App.vue";
import HeaderComponent from "@/Components/HeaderComponent.vue";
import Sidebar from "@/Components/Sidebar.vue";
import {router} from '@inertiajs/vue3'
import Circle from "@/Components/Circle.vue";
import Title from "@/Components/Title.vue";
import About from "@/Pages/Module/Components/About.vue";
import Application from "@/Components/Application.vue";
import FooterComponent from "@/Components/FooterComponent.vue";
import Example from "@/Pages/Module/Components/Example.vue";

defineOptions({layout: App})

const description = 'Быстро.<br>Надежно.<br>Инновационно.'
const longDescription = '«Модульные здания» – это современное решение для создания жилых, коммерческих и промышленных объектов. Благодаря заводской сборке основных конструкций, сокращаются сроки строительства и снижаются затраты, не теряя при этом в качестве и долговечности. '
const link = '/module#application'
const label = 'Заказать услугу'
</script>

<template>
    <div class="relative bg-module-dark">
        <Circle/>
        <div class="z-10 h-full">
            <HeaderComponent title="Group 7024" :click="() => router.visit('/')" :back-click="() => router.visit('/#companies')"/>
            <div class="grid lg:grid-cols-[181px_1fr] h-full">
                <Sidebar :click="() => router.visit('/#companies')"/>
                <div class="flex flex-col">
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
