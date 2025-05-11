<script setup>
import {computed, nextTick, onMounted, onUnmounted, ref, watch} from "vue"
import IMask from 'imask'

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'text',
    },
    size: {
        type: String,
        default: 'md',
        validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    error: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    },
})

const emit = defineEmits(['update:modelValue'])

let mask
const inputValue = ref(null)

const inputClasses = computed(() => {
    let base = `
    w-full bg-transparent placeholder:text-white placeholder:opacity-80 text-white
    text-leading-tracking transition-all duration-300 ease-in-out
    border rounded-[4px] outline-0 focus:border-white
  `
    let sizeClass = ''
    if (props.size === 'sm') {
        sizeClass = 'text-sm py-2 px-3'
    } else if (props.size === 'lg') {
        sizeClass = 'text-lg py-4 px-6'
    } else {
        sizeClass = 'text-base py-[17px] px-[30px]'
    }

    let borderColor = props.error ? 'border-red-500' : 'border-dark-border'
    let disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

    return `${base} ${sizeClass} ${borderColor} ${disabledClass}`
})

onMounted(() => {
    if (props.type === 'tel') {
        mask = IMask(inputValue.value, {
            mask: '+{7}0000000000',
            lazy: true,
            overwrite: 'shift'
        })

        mask.on('accept', () => {
            emit('update:modelValue', mask.value)
        })
    }
})

onUnmounted(() => {
    if (mask) {
        mask.destroy()
    }
})

watch(inputValue, async node => {
    if (!node || props.type !== 'tel') return        // ещё нет элемента

    await nextTick()                                // убеждаемся, что DOM готов

    mask = IMask(node, {
        mask: '+{7} (000) 000 00 00',
        lazy: true,
        overwrite: 'shift',
    })

    mask.on('accept', () => emit('update:modelValue', mask.value))
})

watch(() => props.modelValue, (newValue) => {
    if (!mask) return

    if (newValue === '') {
        mask.updateOptions({lazy: true})
        mask.value = ''
    }

    else if (newValue !== mask.value) {
        mask.updateOptions({lazy: false})
        mask.value = newValue
    }
})
</script>

<template>
    <input
        ref="inputValue"
        :placeholder="placeholder"
        :type="type"
        :readonly="readonly"
        :disabled="disabled"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="inputClasses"
    />
</template>
