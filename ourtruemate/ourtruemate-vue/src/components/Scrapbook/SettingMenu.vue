<template>
  <nav class="setting-menu">
    <div class="setting-menu__inner">
      <div class="setting-menu__item music-play" @click="musicPlay">
        <img src="/static/images/icons/music-player.png" alt="">
      </div>
      <div class="setting-menu__item prev-screen" @click="prevScreen">
        <img src="/static/images/icons/back.png" alt="">
      </div>
      <div class="setting-menu__item next-screen" @click="nextScreen">
        <img src="/static/images/icons/next.png" alt="">
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'setting-menu',
  props: {
    nextScreen: Function,
    prevScreen: Function,
    musicPlay: Function,
  },
};
</script>

<style lang="scss" scoped>
  .setting-menu {
    position: fixed;
    bottom: 12px;
    right: 12px;
    z-index: 111;
    border: 1px dashed #333333;
    border-radius: 18px;
  }
  .setting-menu__inner {
    display: flex;
  }
  .setting-menu__item {
    width: 64px;
    height: 64px;
    padding: 16px 12px;
    overflow: hidden;
    border-radius: 18px;

    &:hover {
      transition: all 0.2s ease;
      background-color: rgba(0, 0, 0, 0.2);
      svg, img {
        transform: scale(1.2);
      }
    }
    svg {
      max-width: 48px;
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .music-play {
    padding-right: 16px;
    img {
      width: 90%;
    }
  }

  .next-screen,
  .prev-screen {
    padding: 18px 12px;
  }

</style>

