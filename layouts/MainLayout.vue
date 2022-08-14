<template>
  <div class="layout">
    <div class="navigation">
      <a href="/" class="logo">
        <img src="../renderer/logo.svg" height="64" width="64" alt="logo" />
      </a>
      <a href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/gpanel/dashboard">GAME PANEL</a>
    </div>
    <div class="content"><slot /></div>
  </div>
</template>

<script lang="ts" setup>
import Link from '../components/Default/Link.vue'
</script>
