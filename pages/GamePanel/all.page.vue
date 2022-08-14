<template>
  <div>
    <router-link to="/gpanel/dashboard">Dashboard</router-link> |
    <router-link to="/gpanel/wallet">Wallet</router-link>
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" v-if="Component"/>
      </Suspense>
    </router-view>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const state = reactive({ count: 0 })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
