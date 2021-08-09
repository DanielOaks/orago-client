<template>
  <div class="bufferHeaderPane">
    <BufferName />
    <div class="topicText">topic goes here</div>
    <BufferSearchBar />
  </div>
</template>

<script lang="ts">
  import BufferName from '../BufferName.vue'
  import BufferSearchBar from './BufferSearchBar.vue'

  export default {
    components: {
      BufferName,
      BufferSearchBar,
    },
  }
</script>

<style lang="scss" scoped>
  .bufferHeaderPane {
    width: 100%;
    height: 3em;
    flex: none;
    display: flex;
    box-sizing: border-box;
    padding: 0 1.25em;
    align-items: center;
    border-bottom: 1px solid var(--bg-1);

    .bufferName {
      width: unset;
      margin-right: 1em;
    }

    .topicText {
      width: 100%;
      flex: 1 1 auto;
      text-overflow: ellipsis;
      color: var(--header-topic-text);
      overflow: hidden;
      white-space: nowrap;
      margin-right: 1em;
    }
  }
</style>
