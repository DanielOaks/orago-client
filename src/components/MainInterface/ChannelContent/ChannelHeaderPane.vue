<template>
  <div class="channelHeaderPane">
    <div class="topicText">topic goes here</div>
  </div>
</template>

<script>
export default {
  name: "ChannelHeaderPane",
};
</script>

<style lang="scss" scoped>
.channelHeaderPane {
  width: 100%;
  height: 3em;
  flex: none;

  display: flex;
  box-sizing: border-box;
  padding: 0 1em;
  align-items: center;
  border-bottom: 1px solid var(--bg-1);

  .topicText {
    width: 100%;
    flex: 1 1 auto;
    //TODO: fade out on right side of the div
    color: var(--header-topic-text);
  }
}
</style>
