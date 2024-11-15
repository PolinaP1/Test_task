<script setup>
import { defineProps } from 'vue';

defineProps({
    isOpenModal: Boolean,
    updateOpenModal:Function
})
</script>

<template>
    <div v-if="isOpenModal" class="background__modal flex-mx" @click="updateOpenModal({ isDelete: false })">
        <div class="modal" @click.stop>
           <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.background__modal {
    background-color: rgba(0, 0, 0, 0.384);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
}

.modal {
    background: white;
    display: inline-block;
    padding: 36px 36px 32px 36px;
    border-radius: 7px;
    line-height: 14.5px;
}
</style>