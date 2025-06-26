<template>
     <div>contacts</div>
     <div v-for="user in usersStore.users" :key="user.id">{{ user.name }}</div>
</template>

<script setup lang="ts">
import { useUsersStore } from "../stores/usersStore";
// definePageMeta({
//     layout: 'default'
// })
useSeoMeta({
    title: "Список работников",
    description: "Список работников"
})

const usersStore = useUsersStore();
// usersStore.fetchUsers()
</script>

