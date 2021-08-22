<template>
  <div class="bufferPane">
    <BufferHeaderPane />
    <div class="bufferContentSidebarContainer">
      <div class="bufferContentInputContainer">
        <BufferContent />
        <BufferInputPane />
      </div>
      <BufferSidebarPane />
    </div>
  </div>
</template>

<script setup lang="ts">
  import BufferContent from './BufferContent/BufferContent.vue'
  import BufferHeaderPane from './BufferContent/BufferHeaderPane.vue'
  import BufferInputPane from './BufferContent/BufferInputPane.vue'
  import BufferSidebarPane from './BufferContent/BufferSidebarPane.vue'
</script>

<style lang="scss" scoped>
  .bufferPane {
    width: 100%;
    height: 100%;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    background: var(--bg-2);

    // this min-width is magic https://stackoverflow.com/a/66689926
    min-width: 0;

    .bufferContentSidebarContainer {
      height: 100%;
      width: 100%;
      flex: 1 1 auto;
      display: flex;

      .bufferContentInputContainer {
        width: 100%;
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;

        // this min-width is magic https://stackoverflow.com/a/66689926
        min-width: 0;
      }
    }
  }
</style>
