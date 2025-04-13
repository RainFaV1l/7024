<script setup>
import {Head, usePage} from '@inertiajs/vue3'
import LoaderComponent from "@/Components/Common/LoaderComponent.vue";

const page = usePage()
</script>

<template>
    <Head :title="page.props.title">
        <meta name="name" content="Your page description">
        <meta name="description" content="Your page description">
    </Head>
    <main>
        <LoaderComponent/>
        <slot></slot>
    </main>
</template>

<style>

</style>
