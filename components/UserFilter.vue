<template>
  <div class="page">
    <div class="add">
      <button class="addBtn">Добавить сотрудника</button>
    </div>
    <div class="search">
      <input type="text" placeholder="поиск..." />
      <button class="btn">Поиск</button>
    </div>
    
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.page {
    height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search {
  margin-right: 5px;
}
.btn {
  margin-right: 10px;
  margin-left: 5px;
  background-color: white;
  border-radius: 5px;
}
.btn:hover{
    background-color: green;
    color: white;
}
.add{
    margin-left: 10px;
    
}
.addBtn{
    background-color: white;
    border-radius: 5px;
}
.addBtn:hover{
    background-color: green;
    color: white;
}

</style>
