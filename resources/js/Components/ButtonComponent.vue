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
    },
    click: {
        type: Function,
        required: false,
    },
    type: {
        type: String,
        required: false,
        default: 'outline'
    },
    buttonType: {
        type: String,
        required: false,
        default: 'button'
    },
    px: {
        type: Number,
        required: false,
        default: 36
    },
    py: {
        type: Number,
        required: false,
        default: 18
    }
})

const getClassByType = (type) => {
    if(types.includes(type)) {
        switch (type) {
            case 'outline':
                return 'text-white hover:bg-white hover:text-dark'
            case 'fill':
                return 'bg-white text-dark hover:bg-transparent hover:text-white'
        }
    }
}

const getBaseClasses = (type) => {
    return `rounded-[4px] uppercase text-base border border-white leading-[140%] tracking-[1.5px] transition ` + getClassByType(type);
}
</script>

<template>
    <Link v-show="link" :href="link"
          :class="getBaseClasses(props.type)"
          :style="{ paddingLeft: `${px}px`, paddingRight: `${px}px`, paddingTop: `${py}px`, paddingBottom: `${py}px` }"
    ><slot/></Link>
    <button type="button" v-show="click && buttonType === 'button'"
            @click="click"
            :class="getBaseClasses(props.type)"
            :style="{ paddingLeft: `${px}px`, paddingRight: `${px}px`, paddingTop: `${py}px`, paddingBottom: `${py}px` }"
    ><slot/></button>
    <button type="submit" v-show="click && buttonType === 'submit'"
            :class="getBaseClasses(props.type)"
            :style="{ paddingLeft: `${px}px`, paddingRight: `${px}px`, paddingTop: `${py}px`, paddingBottom: `${py}px` }"
    ><slot/></button>
</template>
