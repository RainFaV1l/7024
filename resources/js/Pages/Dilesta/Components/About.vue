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
    <div class="flex justify-between">
        <div class="basis-[33%]">
            <div class="flex flex-col items-start gap-[40px] p-[40px] h-full" :class="getClasses(props.position)">
                <p class="text-white opacity-80 leading-[150%] tracking-[2px] w-[400px]">{{ props.description }}</p>
                <ButtonComponent :link="props.link">{{ props.label }}</ButtonComponent>
            </div>
            <div class="w-full bg-white h-[1px] opacity-10"></div>
        </div>
        <div class="basis-[67%] flex flex-col justify-between
        border-l border-b border-dark-border">
            <p class="w-[638px] text-white opacity-80 leading-[150%] tracking-[2px] py-[100px] px-[40px]">{{ props.longDescription }}</p>
            <ArrowLink name="Смотреть примеры работ" link="/" class="pb-[15px]"/>
        </div>
    </div>
</template>

<style scoped>

</style>
