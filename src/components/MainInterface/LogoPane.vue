<template>
  <div class="logoPane">
    <div class="logoContainer">
      <img src="@/assets/logo.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .logoPane {
    height: 3em;
    display: flex;
    flex-shrink: 0;

    .logoContainer {
      height: 100%;
      width: 100%;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 2.05em;
      }
    }
  }
</style>
