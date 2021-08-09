<template>
  <div class="bufferName">
    <div class="symbol">#</div>
    <div class="name">channel</div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
  .bufferName {
    height: 3em;
    width: 100%;
    flex: 1 1 auto;
    display: flex;
    align-items: center;

    .symbol {
      width: 1em;
      flex: 0 0 none;
      color: var(--channel-icon-active);
      margin-right: 0.35em;
      font-size: 1.5em;
      font-weight: 600;
    }

    .name {
      width: 100%;
      flex: 1 1 auto;
      color: var(--channel-name-active);
    }
  }
</style>
