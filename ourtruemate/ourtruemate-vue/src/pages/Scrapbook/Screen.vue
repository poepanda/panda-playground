<template>
  <transition
    v-if="screen"
    name="fade"
    v-on:after-enter="nextFrame">
    <div class="scrapbook" :style="screen.style">
      <div class="scrapbook__container" @click="nextFrame()">
        <div
          class="scrapbook__frame"
          :key="index"
          :style="frame.style"
          v-for="(frame, index) in screen.frames">
          <animated
            innerClass="frame__animated"
            :started="frame.no <= currentFrame"
            :in="frame.animated ? frame.animated.in : ''"
            :out="frame.animated ? frame.animated.out : ''"
            :style="getAnimatedStyle(frame)"
            :afterEnter="nextFrame">
            <div
              class="frame__inner"
              :style="frame.innerStyle">
              <div
                v-if="frame.type === 'image'"
                class="frame__image"
                :style="getImageStyle(frame)">
              </div>
              <img
                class="frame__cover"
                v-if="frame.cover"
                :style="frame.cover.style"
                :src="frame.cover.url"/>
              <text-typing
                v-if="frame.type === 'text'"
                :id="frame.id"
                :text="frame.text" />
            </div>
          </animated>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios';
import { activateBurstClick } from '@/shared/animation/mo';

export default {
  name: 'scrapbook-screen',
  data() {
    return {
      screen: null,
      currentFrame: 0,
    };
  },
  computed: {
    screenFinished() {
      return this.currentFrame >= this.screen.noOfFrames;
    },
  },
  mounted() {
    activateBurstClick();
  },
  created() {
    const { to, page } = this.$route.params;
    if (!page) this.$router.push(`/to/${to}/page/1`);

    axios.get(`/static/scrapbook-config/${to}/screen${page}.json`)
      .then(({ data }) => {
        this.screen = data;
      });
  },
  methods: {
    nextFrame() {
      if (!this.screenFinished) this.currentFrame += 1;
    },
    nextScreen() {
      const { to, page } = this.$route.params;
      this.$router.push({
        path: `/to/${to}/page/${parseInt(page, 10) + 1}`,
      });
    },
    getImageStyle({ imageStyle, url }) {
      const additionalStyle = {};

      additionalStyle.background = `url(${url})`;
      additionalStyle['background-size'] = 'cover';
      additionalStyle['background-origin'] = 'content-box';

      return {
        ...imageStyle,
        ...additionalStyle,
      };
    },
    getAnimatedStyle({ animatedStyle }) {
      const additionalStyle = {};


      return {
        ...additionalStyle,
        ...animatedStyle,
      };
    },
  },
};
</script>

<style lang="scss">
  .scrapbook {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }

  .scrapbook__container {
    min-width: 1072px;
    max-width: 1170px;
    height: 100%;
    margin: auto;
    position: relative;
    border-left: 2px dashed #3e3e3e;
    border-right: 2px dashed #3e3e3e;
  }
  .frame__inner,
  .frame__animated,
  .frame__image {
    width: 100%;
    height: 100%;
  }

  .frame__inner {
    position: relative;
  }

  .frame__image,
  .frame__cover {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .scrapbook__frame {
    position: absolute;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

