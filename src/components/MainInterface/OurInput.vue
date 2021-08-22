<template>
  <span class="ourInput" role="textbox" contenteditable></span>
</template>

<style lang="scss" scoped>
  span.ourInput {
    background: none;
    border: none;
    font-size: 1em;
    width: 100%;
    max-width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    word-wrap: break-word;
    overflow: hidden;

    &:active,
    &:focus,
    &:focus-visible {
      border: none;
      outline: none;
    }
  }
</style>
