import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.prototype.$axios = axios;

new Vue({
	render : (h) => h(App)
}).$mount('#app');
