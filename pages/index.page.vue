<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Just playing around.</li>
    <li>Interactive. {{ auth.user }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { useAuthStore } from "../composable/stores/login";
const auth = useAuthStore()

const user = auth.$state
</script>
