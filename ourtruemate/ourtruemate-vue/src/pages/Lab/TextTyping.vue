<template>
  <div class="lab-text-typing">
    <h1>Text typing</h1>
    <text-typing
      ref="text1"
      text="We'll miss you! \n Polly"
      class="text-typing-wrapper text-1"/>
    <text-typing
      ref="text2"
      text="All the best dude \n ..Po"
      class="text-typing-wrapper text-2"/>
  </div>
</template>

<script>
import TextTyping from '@/shared/components/TextTyping';

export default {
  name: 'Lab-TextTyping',
  components: {
    TextTyping,
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
  .lab-text-typing {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .text-typing-wrapper {
    font-family: 'Waiting for the Sunrise', cursive;
    font-size:30px;
    margin: 10px 50px;
    letter-spacing: 6px;
    font-weight: bold;
    background-color: white;
    padding: 18px;
    width: 200px;
    &.text-1 {
      position: absolute;
      left: 18px;
      top: 100px;
      transform: rotate(-20deg);
    }
    &.text-2 {
      position: absolute;
      right: 18px;
      bottom: 120px;
      transform: rotate(20deg);
    }
  }

</style>
