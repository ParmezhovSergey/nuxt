<template>
  <div class="list">
    <div class="users">
      <div class="title">
        <div class="text">Имя</div>
        <div class="text">Телефон</div>
      </div>
      <div class="title">
        <div class="user">{{ props.user.name }}</div>
        <div class="user">{{ props.user.phone }}</div>
        <div class="btn">
          <button @click="setOpen" class="userBtn">Открыть</button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isOpen === true">
    <UserInfo @back="setClose" />
  </div>
</template>
<script setup lang="ts">
interface Props {
  user: IUser;
}

const props = defineProps<Props>();
const usersStore = useUsersStore();

const isOpen = useState("myBoolean", () => false);

const setOpen = () => {
  isOpen.value = true;
  usersStore.openUser(props.user.id);
  console.log("user", props.user.id);
};
const setClose = () => {
  isOpen.value = false;
};
</script>
<style scoped>
.list {
  padding-top: 6px;
  padding-bottom: 6px;
}
.users {
  width: 300px;
  border: 2px solid rgb(71, 55, 4);
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
}
.title {
}
.text {
  margin-top: 5px;
}
.user {
  margin-top: 5px;
}
.btn {
  display: flex;
  justify-content: flex-end;
}
.userBtn {
  margin-top: 10px;
  margin-bottom: 5px;
  width: 70px;
  background-color: rgb(132, 209, 15);
  border-radius: 5px;
  border: 1px solid green;
}
.userBtn:hover {
  color: white;
  background-color: green;
}
</style>
