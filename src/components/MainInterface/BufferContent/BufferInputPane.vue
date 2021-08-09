<template>
  <div class="bufferInputPane">
    <div class="inputContainer">
      <!-- <textarea /> -->
      <OurInput />
      <span class="input" role="textbox" contenteditable></span>
    </div>
  </div>
</template>

<script lang="ts">
  import OurInput from '@/components/MainInterface/OurInput.vue'

  export default {
    components: {
      OurInput,
    },
  }
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

      .ourInput {
        padding: 1em 0;
      }
    }
  }
</style>
