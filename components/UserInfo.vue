<template>
  <div class="modal-container">
    <div class="modal">
      <div class="header">Подробная информация</div>
      <div class="name">
        Имя
        <input
          type="text"
          placeholder="Имя"
          v-model="newUser.name"
          style="margin-left: 30px; border-radius: 5px"
        />
      </div>
      <div class="city">
        Город
        <input
          type="text"
          placeholder="Город"
          v-model="newUser.city"
          style="margin-left: 19px; border-radius: 5px"
        />
      </div>
      <div class="age">
        Возраст
        <input
          type="text"
          placeholder="Возраст"
          v-model="newUser.age"
          style="margin-left: 4px; border-radius: 5px"
        />
      </div>
      <div class="phone">
        Телефон
        <input
          type="phone"
          placeholder="телефон"
          v-model="newUser.phone"
          style="border-radius: 5px"
        />
      </div>
      <div class="btn">
        <button class="btnBack" @click="$emit('back')">Назад</button>
        <button class="btnSave" @click="$emit('back'), changeUser(newUser)">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const usersStore = useUsersStore();
const target = {};
const newObject = { ...target, ...usersStore.newUser };
const newUser = ref<IUser>(newObject);

const changeUser = (newUser: IUser) => {
  if (usersStore.isOpen === true) {
    usersStore.changeUsers(newUser);
  } else {
    usersStore.addUser(newUser);
  }
};
</script>

<style scoped>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
.name {
  margin-top: 10px;
}
.city {
  margin-top: 10px;
}
.age {
  margin-top: 10px;
}
.phone {
  margin-top: 10px;
}
.btn {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.btnBack {
  margin-right: 10px;
  background-color: orange;
  border: orange;
  border-radius: 5px;
}
.btnSave {
  background-color: green;
  border: green;
  border-radius: 5px;
}
.header {
  display: flex;
  justify-content: center;
  color: red;
}
</style>
