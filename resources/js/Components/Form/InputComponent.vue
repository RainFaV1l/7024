<script setup>
import { onMounted, onUnmounted, ref, watch, computed } from "vue"
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
    }
})

const emit = defineEmits(['update:modelValue'])

const inputRef = ref(null)
let mask = null

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
    if (inputRef.value && props.type === 'tel') {
        mask = IMask(inputRef.value, {
            mask: '+{7} (000) 000-00-00',
            lazy: true,
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

watch(() => props.modelValue, (newValue) => {
    if (mask) {
        if (mask.value !== newValue) {
            mask.updateOptions({ lazy: false })
            mask.value = newValue
        }
    } else if (inputRef.value) {
        inputRef.value.value = newValue
    }
})
</script>

<template>
    <input
        ref="inputRef"
        v-if="type === 'tel'"
        :placeholder="placeholder"
        type="text"
        :readonly="readonly"
        :disabled="disabled"
        :class="inputClasses"
    />

    <input
        v-else
        ref="inputRef"
        :placeholder="placeholder"
        :type="type"
        :readonly="readonly"
        :disabled="disabled"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="inputClasses"
    />
</template>
