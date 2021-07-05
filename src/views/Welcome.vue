<template>
  <v-main>
    <v-container class="justify-center align-center" fill-height>
      <v-img
        :src="require('../assets/logo.png')"
        class="my-3"
        contain
        height="110"
        @click.stop="onClickWelcome"
        style="cursor: pointer"
      />
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
  methods: {
    onClickWelcome() {
      this.$store.commit("welcomed");
      this.$router.push("/");
    },
  },
};
</script>
