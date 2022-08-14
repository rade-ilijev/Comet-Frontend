import { defineStore } from 'pinia'
import axios from "axios";
import api from "../api";
import { useLocalStorage } from '@vueuse/core'
import { hydrate } from "vue";


export const useAuthStore = defineStore('auth', {
  // could also be defined as
  state: () => ({
    user: 'testing',
  }),

  actions: {
    async login(payload: any) {
      await api().get('/sanctum/csrf-cookie')
      await api().post('/api/auth/login', {
        email: "admin@kgb.gg",
        password: "Admin_1234!"
      }).then(async (data: any) => {
        this.user = 'testingss'
        console.log(this.user)
      }).catch((e: any) => {
        console.log('Error Login')
      });
    },
  },
})