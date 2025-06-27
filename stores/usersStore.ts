import { defineStore } from "pinia";
import { getUsers } from "./api";

export interface IUser {
  id: number;
  name: string;
  age: number | null;
  city: string;
  phone: number
}

// interface IAuth {
//   login: string;
//   pass: string;
// }

// interface initialState {
//   users: Array<IUser>;
// userCity: Array<IUser>;
// auth: IAuth;
// city: string;
// searchQuery: string;
// }

export const useUsersStore = defineStore("usersStore", {
  state: () => ({
    users: [] as IUser[]
  }),

  getters: {},

  actions: {
    async fetchUsers() {
      const settings = await getUsers();
      this.users = settings.users;
      console.log("users", settings.users);
    },
  },
});
