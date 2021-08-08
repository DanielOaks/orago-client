<template>
  <div class="channelContentPane">
    <ChannelHeaderPane />
  </div>
</template>

<script>
import ChannelHeaderPane from "./ChannelContent/ChannelHeaderPane.vue";

export default {
  name: "ChannelContentPane",
  components: {
    ChannelHeaderPane,
  },
};
</script>

<style lang="scss" scoped>
.channelContentPane {
  width: 100%;
  height: 100%;
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
  background: var(--bg-2);
}
</style>
