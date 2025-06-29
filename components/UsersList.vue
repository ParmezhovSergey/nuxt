<template>
  <div class="users">
    <UserItem
      v-for="user in usersStore.searchUser"
      :user="user"
      :key="user.id"
    />
  </div>
</template>

<script setup lang="ts">
const usersStore = useUsersStore();
usersStore.fetchUsers();
</script>

<style scoped>
.users {
  height: calc(100vh - 160px);
  overflow: auto;
}
</style>
