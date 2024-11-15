<script setup>
import { defineProps } from 'vue'

defineProps({
    clearFilter: Function
})

</script>

<template>
    <button class="buttonClean flex-mx" @click="clearFilter()">
        <img src="@/icon/clean.svg" alt="Очистить фильтр" class="buttonClean__icon">
        <p>Очистить фильтр</p>
    </button>
</template>

<style scoped>
.buttonClean__icon {
    height: 16px;
}

.buttonClean {
    padding-top: 24px;
    gap: 4px;
}

.buttonClean:hover {
    transform: var(--transform-animation-scale);
    transition: var(--transition-animation-scale);
}
</style>