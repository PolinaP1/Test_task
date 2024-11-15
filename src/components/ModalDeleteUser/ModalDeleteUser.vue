<script setup>
import { defineProps } from 'vue'
import ModalUI from '../UI/ModalUI.vue'

defineProps({
    isOpen: Boolean,
    updateOpenModal: Function
})
</script>

<template>
    <ModalUI :isOpen="isOpen" :updateOpenModal="updateOpenModal">
        <p>Вы уверены, что хотите удалить пользователя?</p>
        <div class="buttonDelete flex-mx">
            <button class="buttonDelete__approval buttonNormal-mx" @click="updateOpenModal({ isDelete: true })">Да</button>
            <button class="buttonDelete__fault buttonNormal-mx" @click="updateOpenModal({ isDelete: false })">Нет</button>
        </div>
    </ModalUI>
</template>

<style scoped>
.buttonDelete {
    padding-top: 24px;
    justify-content: center;
    gap: 36px;
}

.buttonDelete__approval {
    background: var(--button-calm-gray);
    color: var(--button-calm-gray-text);
}

.buttonDelete__fault {
    background: var(--username);
    color: white;
}

.buttonDelete__approval:hover,
.buttonDelete__fault:hover {
    transform: var(--transform-animation-scale);
    transition: var(--transition-animation-scale);
}
</style>