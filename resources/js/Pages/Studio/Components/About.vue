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
    <div class="flex justify-between flex-col md:flex-row border-b border-dark-border">
        <div class="basis-[67.23%] border-r  border-dark-border">
            <div class="flex flex-col items-start gap-[40px] px-[20px] py-[40px] md:px-[40px] h-full" :class="getClasses(props.position)">
                <p class="text-sm sm:text-base md:text-lg text-white opacity-80 leading-[150%] tracking-[2px]">{{ props.description }}</p>
                <ButtonComponent :link="props.link">{{ props.label }}</ButtonComponent>
            </div>
        </div>
        <div class="basis-[33%]">
            <div class="py-[20px] px-[0px] md:py-[40px]">
                <div class="flex flex-col gap-[15px]">
                    <ArrowLink name="Behance" link="/"/>
                    <ArrowLink name="Pinterest" link="/"/>
                    <ArrowLink name="Vimeo" link="/"/>
                    <ArrowLink name="Youtube" link="/"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
