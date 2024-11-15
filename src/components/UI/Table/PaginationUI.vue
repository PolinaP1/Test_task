<script setup>
import { defineProps } from 'vue';

defineProps({
    paginationsOptins: Array,
    page:Number,
    updatePage:Function
})
</script>

<template>
    <nav>
        <ul class="pagination flex-mx ">
            <li :class="['pagination__item', page+1 == optin && 'pagination__item-active']" v-for="optin in paginationsOptins" :key="optin" @click="updatePage(optin)">{{optin}}</li>
        </ul>
    </nav>
</template>

<style scoped>
.pagination{
    color: var(--font);
    font-weight: 700;
    justify-content: center;
    gap: 8px;
    padding-top: 20px;
    font-size: 14px;
}
.pagination__item:hover{
    transform: scale(1.1); 
    transition: var(--transition-animation-scale);
}
.pagination__item-active{
    color: var(--username);
}
</style>