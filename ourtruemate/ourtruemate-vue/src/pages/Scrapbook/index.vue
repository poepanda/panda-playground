<template>
  <div class="scrapbook-wrapper">
    <router-view />
    <setting-menu
      :musicPlay="musicPlay"
      :prevScreen="prevScreen"
      :nextScreen="nextScreen"/>
  </div>
</template>

<script>
import SettingMenu from '@/components/Scrapbook/SettingMenu';

export default {
  name: 'scrapbook',
  components: {
    SettingMenu,
  },
  data() {
    return {
      currentPage: parseInt(this.$route.params.page, 10),
    };
  },
  methods: {
    goToPage(pageId) {
      if (pageId < 1) return;
      this.$router.push({
        path: `/scrapbook/${this.$route.params.to}/page/${pageId}`,
      });
    },
    nextScreen() {
      this.goToPage(this.currentPage + 1);
    },
    prevScreen() {
      this.goToPage(this.currentPage - 1);
    },
    musicPlay() {

    },
  },
};
</script>

<style lang="scss" scoped>
  .scrapbook-wrapper {
    width: 100%;
    height: 100%;
  }
</style>

