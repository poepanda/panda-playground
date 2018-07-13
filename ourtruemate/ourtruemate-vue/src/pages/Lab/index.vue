<template>
  <div class="lab">
    <h1>Lab</h1>
    <ul>
      <li :key="topic.name" v-for="topic in topics">
        <router-link :to="getPath(topic.path)">{{ topic.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Lab',
  data() {
    return {
      basePath: '/lab',
      topics: [
        {
          path: 'lottie',
          name: 'Lottie',
        },
        {
          path: 'text-typing',
          name: 'TextTyping',
        },
        {
          path: 'animated',
          name: 'Animated',
        },
        {
          path: 'mojs',
          name: 'Mo.js',
        },
      ],
    };
  },
  methods: {
    getPath(path) {
      return `${this.basePath}/${path}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  h1 {
    padding-bottom: 12px;
  }
  li {
    padding: 12px;
    text-align: center;
    a {
      text-decoration: none;
      color: #333333;
    }
  }
</style>

