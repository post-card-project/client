import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.prototype.$axios = axios;

new Vue({
	render : (h) => h(App)
}).$mount('#app');
