<script setup>
import { defineProps } from 'vue';

defineProps({
    userList: Array,
    updateOpenModal: Function
})
</script>

<template>
    <tbody>
        <tr class="userTable__row" v-for="user in userList" :key="user.id">
            <td class="userTable__item">{{ user.username }}</td>
            <td class="userTable__item">{{ user.email }}</td>
            <td class="userTable__item">{{ user.registration_date_view }}</td>
            <td class="userTable__item ">
                {{ user.rating }}
                <button class="userTable__buttonDelete" @click="updateOpenModal({ id: user.id })">
                    <img src="@/icon/cancel.svg" alt="Удалить">
                </button>
            </td>
        </tr>
    </tbody>
</template>

<style scoped>
.userTable__row {
    display: table-row;
}

.userTable__row td:first-child {
    color: var(--username);
    font-weight: 700;
}

.userTable__row td:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 16px;
}

.userTable__item {
    border-top: 1px solid var(--background);
    height: 50px;
    color: var(--font);
}

.userTable__buttonDelete {
    width: 16px;
    height: 16px;
}

.userTable__deleteBut:hover {
    transform: scale(1.15);
    transition: var(--transition-animation-scale);
}
</style>