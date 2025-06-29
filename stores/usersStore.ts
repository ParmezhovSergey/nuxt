import { defineStore } from "pinia";
import { getUsers } from "./api";

export interface IUser {
  id: number;
  name: string;
  age: number | null;
  city: string;
  phone: number | null;
}
// export interface IUserId {
//   id?: number | null | undefined;
//   name?: string | undefined;
//   age?: number | null | undefined;
//   city?: string | undefined;
//   phone?: number | null | undefined;
// }

interface initialState {
  users: Array<IUser>;
  newUser: any;
  isOpen: boolean;
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
    isOpen: false,
    searchQuery: "",
  }),

  getters: {},

  actions: {
    async fetchUsers() {
      const settings = await getUsers();
      this.users = settings.users;
    },

    openUser(id: number) {
      const userId = this.users.find((item) => item.id === id);
      this.newUser = userId;
      this.isOpen = true
      
    },

    changeUsers(newUser: IUser) {
      const newUsers = this.users.map((obj) => {
        if (obj.id === newUser.id) {
          return newUser;
        }
        return obj;
      });
      this.users = newUsers;
    },

    addUser(newUser: IUser){
      this.users.push(newUser)
      console.log('users', this.users)
    }
  },
});
