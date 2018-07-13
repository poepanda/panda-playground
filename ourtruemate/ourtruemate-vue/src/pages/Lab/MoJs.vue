<template>
  <div class="mo-js" @click="clickAction">
    <div class="square"></div>
  </div>
</template>

<script>
import mojs from 'mo-js';

const SWIRL_OPTS = {
  left: 0,
  top: 0,
  fill: '#ffffff',
  duration: 'rand(600, 1000)',
  radius: 'rand(10, 20)',
  pathScale: 'rand(.5, 1)',
  swirlFrequency: 'rand(2,4)',
  swirlSize: 'rand(6,14)',
};

export default {
  name: 'MoJs',
  data() {
    return {
      swirl1: null,
      swirl2: null,
      swirl3: null,
      swirl4: null,
    };
  },
  mounted() {
    const square1 = new mojs.Html({
      el: '.square',
      y: { [-300]: 0 },
      duration: 2000,
    });

    setTimeout(() => square1.play(), 750);

    this.swirl1 = new mojs.ShapeSwirl({
      ...SWIRL_OPTS,
    });

    this.swirl2 = new mojs.ShapeSwirl({
      ...SWIRL_OPTS,
      direction: -1,
    });

    this.swirl3 = new mojs.ShapeSwirl({
      ...SWIRL_OPTS,
    });

    this.swirl4 = new mojs.ShapeSwirl({
      ...SWIRL_OPTS,
    });
  },
  methods: {
    clickAction(e) {
      const x = e.pageX;
      const y = { [e.pageY]: e.pageY - 150 };
      this.swirl1
        .tune({ x, y })
        .generate()
        .replay();

      this.swirl2
        .tune({ x, y })
        .generate()
        .replay();

      this.swirl3
        .tune({ x, y })
        .generate()
        .replay();

      this.swirl4
        .tune({ x, y })
        .generate()
        .replay();
    },
  },
};
</script>

<style lang="scss" scoped>
  .square {
    width: 75px;
    height: 75px;
    position: absolute;
    top: 200px;
    left: 200px;
    background: #333333;
  }
  .mo-js {
    width: 100%;
    height: 100%;
  }
</style>
