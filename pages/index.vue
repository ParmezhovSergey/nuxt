<template>
  <div class="page">
    <UserFilter />
    <div class="title">Список сотрудников</div>
    <UsersList />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
useSeoMeta({
  title: "Список работников",
  description: "Список работников",
});
</script>

<style scoped>
.page {
  background-color: rgb(248, 235, 216);
}
.title {
  width: 180px;
  font-size: 20px;
  margin: 0 auto;
  padding-top: 10px;
}
</style>
