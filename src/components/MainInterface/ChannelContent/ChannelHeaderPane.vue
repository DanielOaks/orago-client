<template>
  <div class="channelHeaderPane">
    <ChannelName />
    <div class="topicText">topic goes here</div>
    <ChannelSearchBar />
  </div>
</template>

<script>
import ChannelName from "../ChannelName.vue";
import ChannelSearchBar from "./ChannelSearchBar.vue";

export default {
  name: "ChannelHeaderPane",
  components: {
    ChannelName,
    ChannelSearchBar,
  },
};
</script>

<style lang="scss" scoped>
.channelHeaderPane {
  width: 100%;
  height: 3em;
  flex: none;

  display: flex;
  box-sizing: border-box;
  padding: 0 1.25em;
  align-items: center;
  border-bottom: 1px solid var(--bg-1);

  .channelName {
    width: unset;
    margin-right: 1em;
  }

  .topicText {
    width: 100%;
    flex: 1 1 auto;
    //TODO: fade out on right side of the div
    color: var(--header-topic-text);
  }
}
</style>
