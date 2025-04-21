<script setup>
import App from "@/Layouts/App.vue";
import { computed } from 'vue'
import TitleComponent from "@/Pages/Index/Components/TitleComponent.vue";

defineOptions({ layout: App })

const props = defineProps({ status: Number })

const title = computed(() => {
    return {
        503: '503',
        500: '500',
        404: '404',
        403: '403',
    }[props.status]
})

const description = computed(() => {
    return {
        503: 'Ведутся технические работы, зайдите позднее.',
        500: 'Упс, что-то пошло не так на наших серверах.',
        404: 'Извините, страница, которую вы ищете, не найдена.',
        403: 'Извините, вам запрещен доступ к этой странице.',
    }[props.status]
})
</script>

<template>
    <div class="h-dvh bg-dark flex justify-center items-center font-sans">
        <TitleComponent :title="title" :subtitle="description"/>
    </div>
</template>
