<template>
  <input class="channelSearchBar" />
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
  .channelSearchBar {
    width: 15em;
    flex: 0 0 none;
    padding: 0.3em 0.8em;
    border-radius: 0.5em;
    background: var(--header-searchbox-bg);
    color: var(--header-searchbox-text);
    border: none;
    font-size: 1em;

    &:active,
    &:focus {
      color: var(--header-searchbox-text-active);
      border-radius: 0.5em;
    }
  }
</style>
