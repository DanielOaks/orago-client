<template>
  <router-view />
</template>

<style lang="scss">
  html,
  body,
  #app {
    height: 100%;
    overflow: hidden;
  }

  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--bg-1);
  }

  // dark theme
  :root {
    --alert-pip: #fbf7ff;
    --bg-1: #423c50;
    --bg-2: #605776;
    --channel-active-bg: #5b5171;
    --channel-group-text: #968fac;
    --channel-icon-active: #8b7fa8;
    --channel-icon-inactive: #8b7fa8;
    --channel-name-active: #f0eefa;
    --channel-name-inactive: #bfbcc9;
    --content-textbox-bg: #867e9c;
    --content-textbox-text: #fbf7ff;
    --dm-bg: #8b7fa8;
    --dm-icon: #ded2fd;
    --dm-sep: #584f6d;
    --header-searchbox-bg: #49415e;
    --header-searchbox-text: #aca7b1;
    --header-searchbox-text-active: #fbf7ff;
    --header-topic-text: #bfbcc9;
    --sidebar-alert-pip: #fbf7ff;
    --sidebar-bg: #52486a;
    --sidebar-chevron: #8b7fa8;
    --sidebar-hr: #49415e;
    --sidebar-profile-bg: #49415e;
    --sidebar-title: #f3f1f6;
  }

  // light theme
  [data-theme='light'] {
    --alert-pip: #02000b;
  }
</style>
