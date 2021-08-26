<template>
  <div class="serverListPane">
    <div class="icon"><span>L</span></div>
    <div class="icon"><span>A</span></div>
    <div class="icon"><span>B</span></div>
    <div class="icon"><span>C</span></div>
  </div>
</template>

<style lang="scss" scoped>
  .serverListPane {
    width: 3.5em;
    height: 100%;
    flex: none;

    .icon {
      border-radius: 1.4em;
      position: relative;
      background: #367;
      color: #ace;
      width: 2.8em;
      height: 2.8em;
      margin: 0 auto;
      cursor: pointer;
      transition: border-radius 0.2s cubic-bezier(0.65, 0, 0.35, 1);

      + .icon {
        margin-top: 0.55em;
      }

      &:hover {
        border-radius: 1em;
      }

      span {
        display: block;
        position: absolute;
        width: 2.8em;
        text-align: center;
        top: 0.97em;
        user-select: none;
      }
    }
  }
</style>
