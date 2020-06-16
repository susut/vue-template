import App from './app.vue';
import router from './router';
import store from '@src/store';
import LoadingPlugin from '@src/plugins/loading';

Vue.use(LoadingPlugin);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});