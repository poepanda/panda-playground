<template>
  <div class="lab-animated">
    <h1>animated</h1>
    <div class="animated-wrapper">
      <animated class="img-wrapper" type="bounceInDown">
        <img src="/static/images/birds.jpeg" />
      </animated>
      <animated class="img-wrapper left" type="slideInUp">
        <img src="/static/images/birds.jpeg" />
      </animated>
      <animated class="img-wrapper right" type="zoomInRight">
        <img src="/static/images/birds.jpeg" />
      </animated>
    </div>
  </div>
</template>

<script>
import Animated from '@/shared/components/Animated';

export default {
  name: 'Lab-Animated',
  components: {
    Animated,
  },
};
</script>

<style lang="scss" scoped>
  .lab-animated {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .animated-wrapper {
    width: 400px;
    position: relative;
  }
  .img-wrapper {
    &.left {
      position: absolute;
      left: -200px;
      img {
        transform: rotate(39deg);
      }
    }
    &.right {
      position: absolute;
      right: -170px;
      img {
        transform: rotate(-30deg);
      }
    }
  }
</style>
