<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
// this matches vuetify's defaults, and I'm fine with that
body {
  font-family: "Roboto", sans-serif;
  // line-height: 1.5;
}

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

[data-theme="light"] {
  --alert-pip: #02000b;
}
</style>
