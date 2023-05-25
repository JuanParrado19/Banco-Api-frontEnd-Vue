<template>
    <button :style="{ backgroundColor }" v-bind="$attrs" 
        :class="{ circle: applyCircleClass }">
        <slot />
    </button>
</template>

<script setup>
import { computed } from 'vue'
import { useBackGroundColor, backGroundColorProps } from '../composables/backGroundColor';

const props = defineProps({
    circle: {
        default: false,
        type: Boolean,
    },
    ...backGroundColorProps
});

const applyCircleClass = computed(() => props.circle);

const backgroundColor = useBackGroundColor(props);


</script>

<style scoped>
button {
    color: var(--text-color);
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle {
    border-radius: 50%;
}

.btn:disabled {
    opacity: 60%;
}
</style>