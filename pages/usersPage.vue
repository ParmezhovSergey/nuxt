<template>
  <div>contacts</div>
  <div v-for="user in usersStore.users" :key="user.id">{{ user.name }}</div>
</template>

<script setup lang="ts">
import { useUsersStore } from "../stores/usersStore";

definePageMeta({
  layout: "default",
});
useSeoMeta({
  title: "Сотрудники",
  description: "Сотрудники",
});

const usersStore = useUsersStore();
usersStore.fetchUsers()
  //  onMounted(() => {
  //    if (usersStore.users.length === 0) {
  //      usersStore.fetchUsers()
  //    }
  //  })

</script>
