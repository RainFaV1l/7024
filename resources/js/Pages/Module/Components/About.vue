<script setup>
import ButtonComponent from "@/Components/ButtonComponent.vue";
import ArrowLink from "@/Components/ArrowLink.vue";

const allowedPositions = [
    'top',
    'center',
]

const props = defineProps({
    link: {
        type: [String, Function],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    longDescription: {
      type: String,
      required: true
    },
    label: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: false,
        default: 'top'
    }
})

const getClasses = (position) => {
    if(allowedPositions.includes(position)) {
        switch (position) {
            case 'top':
                return 'justify-start'
            case 'center':
                return 'justify-center'
        }
    }
}
</script>

<template>
    <div class="flex justify-between flex-col md:flex-row border-b border-b-dark-border">
        <div class="basis-[50%]">
            <div class="flex flex-col items-start gap-[40px] px-[20px] py-[40px] md:px-[40px] h-full" :class="getClasses(props.position)">
                <p class="text-sm sm:text-base md:text-lg text-white opacity-80 leading-[150%] tracking-[2px] md:w-[400px]" v-html="props.description"></p>
                <ButtonComponent :link="props.link">{{ props.label }}</ButtonComponent>
            </div>
            <div class="w-full bg-white h-[1px] opacity-10"></div>
        </div>
        <div class="basis-[50%] flex flex-col justify-start
        border-l border-b border-dark-border">
            <p class="text-sm sm:text-base md:text-lg xl:w-[638px] text-white opacity-80 leading-[150%] tracking-[2px] py-[40px] px-[20px] pb-[40px] md:pb-[140px] md:px-[40px]">{{ props.longDescription }}</p>
        </div>
    </div>
</template>

<style scoped>

</style>
