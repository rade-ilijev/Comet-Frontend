<template>

<div class="login">
  <input type="email" v-model="email" placeholder="test">
  <input type="password" v-model="password" placeholder="password">

  <button @click="login">Login</button>
</div>
  {{ state.user }} is here
</template>

<script lang="ts">
import { useAuthStore } from '../composable/stores/login'
import { ref } from 'vue'

export default {
  name: "Login",
  setup() {
    const auth = useAuthStore()
    const state = auth.$state;
    const email = ref('');
    const password = ref('');

    function login(){
      auth.login({ email: '', password: ''})
    }

    console.log(state.user)

    return {
      email,
      password,
      login,
      state
    }
  },
}
</script>