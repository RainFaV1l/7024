<script setup>
import {Link} from "@inertiajs/vue3";

const types = [
    'outline',
    'fill'
];

const props = defineProps({
    link: {
        type: String,
        required: false,
        default: '/'
    },
    click: {
        type: Function,
        required: false,
    },
    type: {
        type: String,
        required: false,
        default: 'outline'
    }
})

const getClassByType = (type) => {
    if(types.includes(type)) {
        switch (type) {
            case 'outline':
                return 'hover:bg-white hover:text-dark'
            case 'fill':
                return 'bg-white text-dark hover:{bg-transparent text-white}'
        }
    }
}

const getBaseClasses = (type) => {
    return "px-[36px] py-[18px] uppercase text-base border border-white text-white leading-[140%] tracking-[1.5px] transition " + getClassByType(type);
}
</script>

<template>
    <Link v-show="link" href="/public" :class="getBaseClasses(props.type)"><slot/></Link>
    <button type="button" v-show="click" :class="getBaseClasses(props.type)"><slot/></button>
</template>
