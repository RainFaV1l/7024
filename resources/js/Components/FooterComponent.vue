<script setup>
import {Link} from "@inertiajs/vue3";

const menus = [
    {
        external: false,
        name: 'Навигация',
        items: [
            {
                link: '/',
                name: 'Group 7024',
            },
            {
                link: '/dilesta',
                name: 'Dilesta',
            },
            {
                link: '/module',
                name: 'Module',
            },
            {
                link: '/studio',
                name: 'Studio 7024',
            },
        ]
    },
    {
        external: true,
        name: 'Контакты',
        items: [
            {
                link: 'tel:+79544355465',
                name: '+7 (954) 435-54-65',
            },
            {
                link: 'mailto:group7024@mail.ru',
                name: 'group7024@mail.ru',
            },
        ]
    },
    {
        external: true,
        name: 'Наши работы',
        items: [
            {
                link: '',
                name: 'Behance',
            },
            {
                link: '',
                name: 'Pinterest',
            },
            {
                link: '',
                name: 'Vimeo',
            },
            {
                link: '',
                name: 'Youtube',
            },
        ]
    }
]
</script>

<template>
    <footer class="relative z-10 border-t border-t-dark-border lg:h-[320px] mt-[50px]">
        <div class="flex flex-col lg:flex-row items-center h-full">
            <div class="flex flex-col py-[40px] xl:py-[0] xl:pt-[50px] gap-[40px] px-[20px] md:px-[40px] lg:px-[50px]
            border-b lg:border-r h-full border-b-dark-border lg:border-r-dark-border w-full lg:w-[30%]">
                <div class="flex flex-col gap-[15px]">
                    <h2 class="text-[32px] text-white">GROUP 7024</h2>
                    <p class="text-sm text-white opacity-80 text-leading-tracking">© 2025 GROUP 7024. All Rights Reserved.</p>
                </div>
                <div class="flex items-center gap-[15px]">
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
            <div class="flex flex-wrap md:flex-nowrap py-[40px] xl:py-0 xl:pt-[50px] h-full items-start lg:justify-center gap-[30px] md:gap-[70px]
            w-full xl:border-r border-r-dark-border px-[20px] md:px-[40px] lg:px-[70px] xl:w-[48%]">
                <div v-for="menu in menus" class="flex flex-col gap-2">
                    <h4 class="font-bold uppercase text-white text-base text-leading-tracking mb-[15px] opacity-80">{{ menu.name }}</h4>
                    <Link v-show="!menu.external" :href="item.link" v-for="(item, key) in menu.items" :key="key" href="#" class="uppercase text-white
                    opacity-80 text-sm text-leading-tracking mb-[15px] hover:opacity-40 transition-all duration-300 ease-in-out">
                        {{ item.name }}
                    </Link>
                    <a v-show="menu.external" :href="item.link" v-for="(item, key) in menu.items" :key="key" href="#" class="uppercase text-white
                    opacity-80 text-sm text-leading-tracking mb-[15px] hover:opacity-40 transition-all duration-300 ease-in-out">
                        {{ item.name }}
                    </a>
                </div>
            </div>
            <div class="xl:w-[22%]"></div>
        </div>
    </footer>
</template>
