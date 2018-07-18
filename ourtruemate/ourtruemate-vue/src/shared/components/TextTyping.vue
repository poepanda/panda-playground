<template>
  <div :id="textId" :class="textTypingClass">
  </div>
</template>

<script>
import classnames from 'classnames';
import uuid from 'uuid/v1';

export default {
  name: 'Text-Typing',
  props: {
    text: {
      type: String,
      default() {
        return 'Default text';
      },
    },
    id: String,
  },
  data() {
    return {
      textId: '',
    };
  },
  computed: {
    textTypingClass() {
      return classnames(
        'text-typing',
        this.class,
      );
    },
  },
  created() {
    this.textId = `${this.id}-${uuid()}`;
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      // set up text to print, each item in array is new line
      const aText = this.text.split('\n');

      const iSpeed = 100; // time delay of print out
      let iIndex = 0; // start printing array at this posision
      let iArrLength = aText[0].length; // the length of the text array
      const iScrollAt = 20; // start scrolling up at this many lines

      let iTextPos = 0; // initialise text position
      let sContents = ''; // initialise contents letiable
      let iRow; // initialise current row

      const typewriter = () => {
        sContents = ' ';
        iRow = Math.max(0, iIndex - iScrollAt);
        const destination = document.getElementById(this.textId);

        while (iRow < iIndex) {
          iRow += 1;
          sContents += `${aText[iRow]}<br />`;
        }

        destination.innerHTML = `${sContents}${aText[iIndex].substring(0, iTextPos)}_`;
        iTextPos += 1;
        if (iTextPos > iArrLength) {
          iTextPos = 0;
          iIndex += 1;

          if (iIndex !== aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout(typewriter, 200);
          }
        } else {
          setTimeout(typewriter, iSpeed);
        }
      };

      typewriter();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

