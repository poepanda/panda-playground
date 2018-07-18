<template>
  <transition
    name="animated-class-transtion"
    :enter-active-class="enterClass"
    :leave-active-class="leaveClass"
    @after-enter="afterEnter">
    <div :class="innerClass" v-if="started">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'animated',
  props: {
    in: {
      type: String,
      default() {
        return 'bounceIn';
      },
    },
    out: {
      type: String,
      default() {
        return 'bounceOut';
      },
    },
    started: {
      type: Boolean,
      default: () => false,
    },
    innerClass: String,
    afterEnter: Function,
  },
  computed: {
    enterClass() {
      return `animated ${this.in}`;
    },
    leaveClass() {
      return `animated ${this.out}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'animate.css/animate.min.css';
</style>

