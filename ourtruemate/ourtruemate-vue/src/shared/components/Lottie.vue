<template>
  <div class="lottie-instance" :id="lottieId"></div>
</template>

<script>
import lottie from 'lottie-web';
import uuid from 'uuid/v1';

export default {
  name: 'Lottie',
  props: {
    name: '',
    path: {
      type: String,
      default() {
        return '';
      },
    },
    renderer: {
      type: String,
      default() {
        return 'svg';
      },
    },
    loop: {
      type: Boolean,
      default() {
        return true;
      },
    },
    autoplay: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      lottieInstance: null,
      lottieId: null,
    };
  },
  computed: {
    lottiePath() {
      return this.path instanceof Object ? this.path.url : this.path;
    },
  },
  created() {
    this.lottieId = `${this.name}${uuid()}`;
  },
  mounted() {
    this.lottieInstance = lottie.loadAnimation({
      container: document.getElementById(this.lottieId),
      renderer: this.renderer,
      loop: this.loop,
      autoplay: this.autoplay,
      path: this.lottiePath,
    });
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
  .lottie-instance {
    width: 100%;
  }
</style>
