<script setup>
import {Link} from "@inertiajs/vue3";

defineProps({
    click: {
        type: Function,
        required: true,
    },
    isIndex: {
        type: Boolean,
        required: false,
        default: false,
    }
})

</script>

<template>
    <div class="relative hidden lg:flex flex-col justify-start w-[182px]">
        <div :class="isIndex ? 'absolute' : 'fixed'" class="h-full flex flex-col justify-start">
            <div class="absolute bg-white opacity-10 h-full right-[-3px] w-px"></div>
            <div class="flex items-start justify-start flex-col gap-[60px] p-[50px]">
                <div class="block cursor-pointer" @click="click">
                    <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM43 7L1 7V9L43 9V7Z" fill="white" fill-opacity="0.8"/>
                    </svg>
                </div>
                <div
                    class="text-white text-lg uppercase tracking-[1.5px] opacity-80
                whitespace-nowrap transform -rotate-90 -ml-14 mt-12 cursor-pointer"
                    @click="click">GROUP 7024
                </div>
            </div>
            <div class="flex items-center gap-[15px] " :class="isIndex ? 'absolute left-[40px] top-[760px]' : 'fixed left-[40px] bottom-[40px]'">
                <Link href="" class="hover:opacity-60 transition-all ease-in-out">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6228 25.2147C10.6458 25.2147 6.09583 19.746 5.90625 10.646H9.90208C10.0333 17.3252 12.9791 20.1543 15.3124 20.7377V10.646H19.0751V16.4064C21.3792 16.1585 23.7998 13.5335 24.6164 10.646H28.379C27.7519 14.2043 25.1269 16.8293 23.2603 17.9085C25.1269 18.7835 28.1167 21.0731 29.2542 25.2147H25.1124C24.2228 22.4439 22.0063 20.3002 19.0751 20.0085V25.2147H18.6228Z" fill="white"/>
                    </svg>
                </Link>
                <Link href="" class="hover:opacity-60 transition-all ease-in-out">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.91539 17.3179C13.0174 15.1022 16.4139 13.6299 18.1195 12.9156C22.9737 10.8893 23.9941 10.5395 24.6501 10.5249C24.7959 10.5249 25.1166 10.5541 25.3352 10.729C25.5101 10.8748 25.5539 11.0643 25.583 11.21C25.6122 11.3558 25.6413 11.6619 25.6122 11.8952C25.3498 14.6648 24.2128 21.385 23.6297 24.4753C23.3819 25.7873 22.9008 26.2246 22.4343 26.2683C21.4139 26.3558 20.6413 25.5978 19.6647 24.9564C18.1195 23.9506 17.2594 23.3237 15.758 22.3325C14.0233 21.1955 15.1457 20.5686 16.137 19.5482C16.3994 19.2858 20.8746 15.2042 20.962 14.8398C20.9766 14.796 20.9766 14.6211 20.8746 14.5336C20.7725 14.4462 20.6268 14.4753 20.5101 14.5045C20.3498 14.5336 17.9008 16.1663 13.1341 19.3879C12.4343 19.8689 11.8075 20.1022 11.239 20.0876C10.6122 20.073 9.41685 19.7377 8.51306 19.4462C7.41977 19.0963 6.54513 18.9068 6.61802 18.2946C6.66175 17.9739 7.09907 17.6532 7.91539 17.3179Z" fill="white"/>
                    </svg>
                </Link>
            </div>
        </div>
    </div>
</template>
