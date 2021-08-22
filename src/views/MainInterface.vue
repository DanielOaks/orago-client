<template>
  <div id="mainInterface">
    <div class="leftPane">
      <LogoPane />
      <div class="listContainer">
        <ServerListPane />
        <div class="channelProfileContainer">
          <BufferListPane />
          <MyProfilePane />
        </div>
      </div>
    </div>
    <BufferPane />
  </div>
</template>

<script setup lang="ts">
  import BufferPane from '@/components/MainInterface/BufferPane.vue'
  import BufferListPane from '@/components/MainInterface/BufferListPane.vue'
  import LogoPane from '@/components/MainInterface/LogoPane.vue'
  import MyProfilePane from '@/components/MainInterface/MyProfilePane.vue'
  import ServerListPane from '@/components/MainInterface/ServerListPane.vue'
</script>

<style lang="scss" scoped>
  #mainInterface {
    width: 100%;
    height: 100%;
    display: flex;
    background: var(--bg-1);

    // this min-width is magic https://stackoverflow.com/a/66689926
    min-width: 0;

    .leftPane {
      width: 17em;
      flex: none;
      display: flex;
      flex-direction: column;

      .listContainer {
        height: 100%;
        flex: 1 1 auto;
        display: flex;

        .channelProfileContainer {
          width: 100%;
          height: 100%;
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
        }
      }
    }

    .rightPane {
      width: 100%;
      flex: 1 1 auto;
    }
  }
</style>
