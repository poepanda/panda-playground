<template>
  <div :class="animatedClass">
    <slot />
  </div>
</template>

<script>
import classnames from 'classnames';

export default {
  name: 'animated',
  props: {
    type: {
      type: String,
      default() {
        return 'bounceIn';
      },
    },
  },
  computed: {
    animatedClass() {
      return classnames(
        'animated',
        this.type,
        this.class,
      );
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'animate.css/animate.min.css';
</style>

