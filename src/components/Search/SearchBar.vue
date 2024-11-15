<script setup>
import { defineProps } from 'vue'
import ButtonClean from './ButtonClean.vue'
import SearchInput from './SearchInput.vue'

defineProps({
    clearFilter:Function,
    searchUser:Function,
    isClearShow:Boolean
})

</script>

<template>
    <section class="searchBar accentBlock-mx">
        <SearchInput  :isClearShow="isClearShow" :searchUser="searchUser"/>
        <ButtonClean v-show="isClearShow" :clearFilter="clearFilter"/>
    </section>
</template>

<style scoped>
.searchBar {
    margin-bottom: 72px;
    padding: 12px 44px 16px 16px;
    box-shadow: 0px 18px 15px 0px rgba(148, 148, 148, 0.15);
}
</style>