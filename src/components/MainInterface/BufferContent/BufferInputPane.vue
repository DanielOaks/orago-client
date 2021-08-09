<template>
  <div class="bufferInputPane">
    <div class="inputContainer">
      <!-- <textarea /> -->
      <span class="input" role="textbox" contenteditable></span>
    </div>
  </div>
</template>

<script lang="ts"></script>

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

      span.input {
        background: none;
        border: none;
        font-size: 1em;
        width: 100%;
        max-width: 100%;
        padding: 1em 0;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        // resize: none;
        word-wrap: break-word;
        overflow: hidden;

        &:active,
        &:focus,
        &:focus-visible {
          border: none;
          outline: none;
        }
      }
    }
  }
</style>
