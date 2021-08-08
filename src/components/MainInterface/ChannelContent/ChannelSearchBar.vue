<template>
  <input class="channelSearchBar" />
</template>

<script>
export default {
  name: "ChannelSearchBar",
};
</script>

<style lang="scss" scoped>
.channelSearchBar {
  width: 15em;
  flex: 0 0 none;

  padding: 0.3em 0.8em;
  border-radius: 0.5em;
  background: var(--header-searchbox-bg);
  color: var(--header-searchbox-text);
  &:active,
  &:focus {
    color: var(--header-searchbox-text-active);
  }
}
</style>
