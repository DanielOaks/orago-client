<template>
  <div class="bufferInputPane">
    <div class="inputContainer">
      <OurInput />
    </div>
  </div>
</template>

<script setup lang="ts">
  import OurInput from '@/components/MainInterface/OurInput.vue'
</script>

<style lang="scss" scoped>
  .bufferInputPane {
    width: 100%;
    flex: none;
    padding: 0.7em 1em;

    .inputContainer {
      background: var(--content-textbox-bg);
      padding: 0 0.8em;
      border-radius: 0.5em;
      display: flex;
      max-height: 10em;
    }
  }
</style>
