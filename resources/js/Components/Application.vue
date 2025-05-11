<script setup>
import InputComponent from "@/Components/Form/InputComponent.vue";
import {reactive, ref} from "vue";
import {Link, usePage} from "@inertiajs/vue3";
import ButtonComponent from "@/Components/ButtonComponent.vue";
import axios from "axios";
import {useToast} from "vue-toast-notification";

const checked = ref(true)
const page = usePage()
const toast = useToast()
const errors = ref([])

const form = reactive({
    name: '',
    phone: '',
    type: page.props.type,
})

const validator = () => {
    if(form.name === '') {
        errors.value.push({
            field: 'name',
            message: 'Поле имя обязательно для заполнения.',
        })
    }

    if(form.phone === '') {
        errors.value.push({
            field: 'phone',
            message: 'Поле телефон обязательно для заполнения.'
        })
    }

    else {
        errors.value = []
    }
}

const submit = async () => {
    if (!checked.value) {
        toast.error('Согласитесь с нашими условиями.', {duration: 3000})
        return
    }

    validator()

    if(errors.value.length !== 0) {
        return
    }

    try {
        await axios.post(route('application.create'), form)

        toast.success('Заявка отправлена!', {duration: 8000})

        Object.assign(form, { name: '', phone: '' })

    } catch (error) {
        if (error.response.status === 422) {
            toast.error('Заполните поля корректно', {duration: 3000})
        } else {
            toast.error('Ошибка сервера, попробуйте позже', {duration: 3000})
        }
    }
}
</script>

<template>
    <div class="border-t border-t-dark-border" id="application">
        <div class="flex flex-col gap-[40px]">
            <div class="flex flex-col md:flex-row justify-between items-center border-b border-b-dark-border">
                <div class="py-[40px] md:py-[74px] px-[20px] md:px-[40px]
                  flex items-center justify-items-start w-full md:w-[42%]
                  border-b md:border-r md:border-r-dark-border border-b-dark-border md:border-b-0
                ">
                    <h2 class="uppercase text-xl sm:text-3xl md:text-4xl text-white">Заявка</h2>
                </div>
                <div class="w-full md:w-[58%] xl:pr-[206px] px-[20px] md:px-[40px] py-[40px]">
                    <p class="text-sm sm:text-base md:text-lg text-white opacity-80 leading-[150%] tracking-[2px]">Оставьте заявку, чтобы обсудить ваш
                        проект или получить бесплатную консультацию от наших специалистов!</p>
                </div>
            </div>
            <div class="px-[20px] md:px-[40px] md:pb-[40px]">
                <form class="flex flex-col items-start gap-[40px]" @submit.prevent="submit">
                    <div class="flex flex-col md:flex-row items-center gap-[30px] w-full max-w-full md:max-w-[85%]">
                        <div class="flex flex-col gap-2 w-full">
                            <InputComponent placeholder="Имя" v-model="form.name" :error="errors?.[0]?.field === 'name'"/>
                            <p class="text-red-500 text-sm" v-show="errors?.[0]?.field === 'name'">{{ errors?.[0]?.message }}</p>
                        </div>
                        <div class="flex flex-col gap-2 w-full">
                            <InputComponent placeholder="Телефон" v-model="form.phone" type="tel" :error="errors?.[1]?.field === 'phone'"/>
                            <p class="text-red-500 text-sm" v-show="errors?.[0]?.field === 'name'">{{ errors?.[0]?.message }}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-[15px]">
                        <div class="inline-flex items-center cursor-pointer">
                            <input
                                id="privacy"
                                type="checkbox"
                                v-model="checked"
                                class="peer hidden"
                            />
                            <label for="privacy"
                                   class="w-[24px] h-[24px] border border-dark-border rounded-[2px]
                                        cursor-pointer
                                        bg-transparent flex items-center justify-center
                                       peer-checked:border-white peer-checked:bg-white transition"
                            >
                                <svg
                                    v-if="checked"
                                    class="w-4 h-4 text-dark"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="3"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 13l4 4L19 7"/>
                                </svg>
                            </label>
                        </div>
                        <label for="privacy" class="text-white opacity-80">
                            Согласен с
                            <Link href="" class="underline hover:opacity-50 transition-all duration-300 ease-in-out">
                                политикой конфиденциальности
                            </Link>
                        </label>
                    </div>
                    <ButtonComponent type="fill" :click="() => submit()" :px="58" :py="18">Записаться</ButtonComponent>
                </form>
            </div>
        </div>
    </div>
</template>
