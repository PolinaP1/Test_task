<script setup>
import { defineProps } from 'vue'
import SORTING_OPTIONS from '@/utils/SortingOptions'

defineProps({
    sortUser: Object,
    toggleSortOption:Function
})

</script>

<template>
    <section class="sorting flex-mx">
        <h2>Сортировка:</h2>
        <ul class="sorting__options flex-mx">
            <li :class='sortUser.type == option.option ? "sorting__item-active " : "sorting__item "'
                v-for="option in SORTING_OPTIONS" :key="option.option"
                @click="toggleSortOption(option.option)">
                {{ option.title }}
            </li>
        </ul>
    </section>
</template>

<style scoped>
.sorting {
    color: var(--names-tablet);
    padding-bottom: 15px;
    gap: 8px;
    line-height: 14px;
}

.sorting__options {
    gap: 8px;
}

.sorting__item {
    border-bottom: 1px dashed var(--names-tablet);
}

.sorting__item-active {
    border-bottom: 1px dashed rgba(51, 51, 51, 1);
    color: rgba(51, 51, 51, 1);
}

.sorting__item:hover,
.sorting__item-active:hover {
    transform: var(--transform-animation-scale);
    transition: var(--transition-animation-scale);
}
</style>