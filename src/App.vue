<script setup>
import { onMounted, ref, watch } from 'vue'
import getData from './index.js'
import { useFormatDate } from '@/hooks/useFormatDate'
import useGetNumberPagination from '@/hooks/useGetNumberPagination'
import SearchBar from './components/Search/SearchBar.vue'
import SortingUser  from './components/SortingUser/SortingUser.vue'
import TableUI from './components/UI/Table/TableUI.vue'
import UserTable from './components/UserTable.vue'
import Pagination from './components/UI/Table/PaginationUI.vue'
import ModalDeleteUser  from './components/ModalDeleteUser/ModalDeleteUser.vue'
import HEADERS_TABLE from './utils/UserTableHeader.js'

let defaultList = ref([])
let deleteUserId
const page = ref(0)
const pageArray = ref()
let totalPages
const userList = ref()
let searchQuery = ref('')
const isClearShow = ref(false)

//Поиск 
const searchUser = (searchQueryProp) => {
  if (searchQueryProp != undefined) {
    searchQuery.value = searchQueryProp
  }
  let searchRezult = allFilter()
  getNewUserList(searchRezult)
}

const allFilter = () => {
  let sortList = sortUserList();
  return sortList.filter(user => {
    return (user.username?.toLowerCase().includes(searchQuery.value.trim().toLowerCase()) || user.email?.toLowerCase().includes(searchQuery.value.trim().toLowerCase()));
  });
}

//Сортировка
const sortUser = ref({
  type: '',
  increase: false
})

const toggleSortOption = (newType) => {
  if (sortUser.value.type !== newType) {
    sortUser.value = {
      type: newType,
      increase: false
    }

  }
  else {
    sortUser.value = {
      ...sortUser.value,
      increase: !sortUser.value.increase
    }
  }
  searchUser()
}

const sortUserList = () => {
  return defaultList.value.sort((a, b) => {
    if (sortUser.value.type === 'registration_date') {
      const dateA = new Date(a.registration_date);
      const dateB = new Date(b.registration_date);
      return sortUser.value.increase ? dateA - dateB : dateB - dateA;
    }
    else if (sortUser.value.type === '') {
      return a.id - b.id;
    }
    else if (sortUser.value.type === 'rating') {
      return sortUser.value.increase ? a.rating - b.rating : b.rating - a.rating;
    }
  })

}

//Удаление пользователя из списка пользователей с помощью модального окна
const isOpenModal = ref(false)

const updateOpenModal = ({ isDelete, id }) => {
  if (id) {
    deleteUserId = id
  }
  else if (isDelete && deleteUserId) {
    defaultList.value = defaultList.value.filter((user) => user.id !== deleteUserId)
  }
  isOpenModal.value = !isOpenModal.value
  searchUser()
  console.log(isDelete, deleteUserId)
}

//Очистить фильтр
const clearShow = () => {
  isClearShow.value = !!(searchQuery.value || sortUser.value.type);
}

watch([searchQuery, () => sortUser.value.type], () => {
  clearShow();
});

const clearFilter = () => {
  searchQuery.value = ''
  sortUser.value = {
    type: '',
    increase: false
  }
  searchUser()
}

//Пагинация
const getNewUserList = (list) => {
  totalPages = Math.ceil(list.length / 5)
  pageArray.value = useGetNumberPagination(totalPages)
  userList.value = list.slice(slice.start, slice.end)
}

let slice = {
  start: 0,
  end: 5
}

const updatePage = (newPage) => {
  page.value = newPage - 1
  getPaginationList()
}

const getPaginationList = () => {
  slice.start = 5 * page.value
  slice.end = 5 * page.value + 5
  let searchRezult = allFilter()
  userList.value = searchRezult.slice(slice.start, slice.end)
}

onMounted(async () => {
  let data = await getData(`https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users`);
  defaultList.value = data.map(user => ({
    ...user,
    registration_date_view: useFormatDate(user.registration_date)
  }));
  getNewUserList(defaultList.value)
});
</script>

<template>
  <div class="wrapper">
    <h1 class="title">Список пользователей</h1>
    <search-bar :isClearShow="isClearShow" :clearFilter="clearFilter" :searchUser="searchUser" />
    <sorting-user :sortUser="sortUser" :toggleSortOption="toggleSortOption" />
    <TableUI :headerItem="HEADERS_TABLE">
      <UserTable :userList="userList" :updateOpenModal="updateOpenModal" />
      <template #footerTable>
        <Pagination :updatePage="updatePage" :paginationsOptins="pageArray" :page="page" />
      </template>
    </TableUI>
    <ModalDeleteUser :isOpenModal="isOpenModal" :updateOpenModal="updateOpenModal" />
  </div>
</template>

<style>
.wrapper {
  padding: 12px 12px 12px 27px;
  width: 100vw;
  max-width: 1920px;
}

.title {
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 32px;
  font-weight: 700;
}
</style>
