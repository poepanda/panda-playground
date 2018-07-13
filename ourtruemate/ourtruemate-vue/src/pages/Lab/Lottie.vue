<template>
  <div class="lab-lottie">
    <h1>Lottie</h1>
    <div class="lottie-wrapper">
      <lottie path="/static/lottie/gift.json" />
    </div>
    <div class="lottie-wrapper left">
      <lottie class="left" path="/static/lottie/emoji_shock.json" />
    </div>
    <div class="lottie-wrapper right">
      <lottie class="right" path="/static/lottie/StickAndBall.json" />
    </div>
  </div>
</template>

<script>
import Lottie from '@/shared/components/Lottie';

export default {
  name: 'Lab-Lottie',
  components: {
    Lottie,
  },
};
</script>

<style lang="scss" scoped>
  .lab-lottie {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .lottie-wrapper {
    width: 300px;
  }
  .left {
    position: absolute;
    width: 200px;
    left: 30px;
    transform: rotate(30deg)
  }
  .right {
    width: 200px;
    position: absolute;
    right: 30px;
    transform: rotate(-30deg);
  }
</style>
