<script setup>
import {Head, usePage} from '@inertiajs/vue3'
import Loader from "@/Components/Loader.vue";

const page = usePage()
</script>

<template>
    <Head :title="page.props.title">
        <meta name="name" content="Your page description">
        <meta name="description" content="Your page description">
    </Head>
    <main>
        <Loader/>
        <slot></slot>
    </main>
</template>

<style>
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background-color: #26272C;
}

::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
}
</style>
