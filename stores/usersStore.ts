import { defineStore } from "pinia";
import { getUsers } from "./api";

export interface IUser {
  id: number;
  name: string;
  age: number | null;
  city: string;
  phone: number | null;
}
interface IUserId {
  id: number | null;
  name: string;
  age: number | null;
  city: string;
  phone: number | null;
}

interface initialState {
  users: Array<IUser>;
  newUser: IUserId | undefined;
  searchQuery: string;
}

export const useUsersStore = defineStore("usersStore", {
  state: (): initialState => ({
    users: [],
    newUser: {
      id: null,
      name: "",
      age: null,
      city: "",
      phone: null,
    },
    searchQuery: "",
  }),

  getters: {},

  actions: {
    async fetchUsers() {
      const settings = await getUsers();
      this.users = settings.users;
    },

    addUser(id: number) {
      const userId = this.users.find((item) => item.id === id);
      this.newUser = userId;
    },
  },
});
