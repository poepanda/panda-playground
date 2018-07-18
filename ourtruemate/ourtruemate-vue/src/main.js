// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Animated from './shared/components/Animated';
import TextTyping from './shared/components/TextTyping';
import Lottie from './shared/components/Lottie';

Vue.config.productionTip = false;

Vue.component('animated', Animated);
Vue.component('text-typing', TextTyping);
Vue.component('lottie', Lottie);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
