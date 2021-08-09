<template>
  <div>
    <img alt="Orago logo" src="@/assets/logo.png" />
    <h1>Welcome to Orago</h1>

    <router-link to="/">Enter app</router-link>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    setup: () => {
      // mark self as onboarded...
    },
  })
</script>
