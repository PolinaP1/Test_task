<script setup>
import { defineProps } from 'vue';

defineProps({
    headerItem:Array
})
</script>

<template>
    <section class="users accentBlock-mx">
        <table class='users__table'>
            <thead>
                <tr>
                    <th class='users__table__header' v-for="header in headerItem" :key="header">{{ header }}</th>
                </tr>
            </thead>
            <slot></slot>
        </table>
        <slot name="footerTable"></slot>
    </section>
</template>

<style scoped>
.users {
    padding: 16px 18px 16px 16px;
    color: var(--background);
}

.users__table {
    width: 100%;
    table-layout: fixed;
}

.users__table__header {
    padding-bottom: 22px;
    color: var(--names-tablet);
    text-align: left;
    line-height: 14px;
}
</style>