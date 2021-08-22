<template>
  <div class="myProfilePane">
    <Avatar />
    <div class="names">
      <span class="displayName">Daniel Oaks</span>
      <span class="identifier">dan-</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Avatar from './Avatar.vue'
</script>

<style lang="scss" scoped>
  .myProfilePane {
    display: flex;
    height: 3.75em;
    background: var(--sidebar-profile-bg);
    align-items: center;

    .avatar {
      margin: 0 0.4em 0 0.5em;
    }

    .names {
      display: flex;
      flex-direction: column;
      justify-items: center;
      color: var(--sidebar-title);
      width: 100%;
      flex: 1 1 auto;

      .displayName {
        font-size: 1.1em;
        margin-bottom: 0.2em;
      }

      .identifier {
        font-size: 0.85em;
      }
    }
  }
</style>
