<template>
  <div class="bufferPane">
    <BufferHeaderPane />
  </div>
</template>

<script lang="ts">
  import BufferHeaderPane from './BufferContent/BufferHeaderPane.vue'

  export default {
    components: {
      BufferHeaderPane,
    },
  }
</script>

<style lang="scss" scoped>
  .bufferPane {
    width: 100%;
    height: 100%;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    background: var(--bg-2);
  }
</style>
