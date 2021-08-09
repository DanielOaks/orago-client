<template>
  <div id="mainInterface">
    <div class="leftPane">
      <LogoPane />
      <div class="listContainer">
        <ServerListPane />
        <div class="channelProfileContainer">
          <ChannelListPane />
          <MyProfilePane />
        </div>
      </div>
    </div>
    <ChannelContentPane />
  </div>
</template>

<script lang="ts">
  import ChannelContentPane from '@/components/MainInterface/ChannelContentPane.vue'
  import ChannelListPane from '@/components/MainInterface/ChannelListPane.vue'
  import LogoPane from '@/components/MainInterface/LogoPane.vue'
  import MyProfilePane from '@/components/MainInterface/MyProfilePane.vue'
  import ServerListPane from '@/components/MainInterface/ServerListPane.vue'

  export default {
    components: {
      ChannelContentPane,
      ChannelListPane,
      LogoPane,
      MyProfilePane,
      ServerListPane,
    },
  }
</script>

<style lang="scss" scoped>
  #mainInterface {
    width: 100%;
    height: 100%;
    display: flex;
    background: var(--bg-1);

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
