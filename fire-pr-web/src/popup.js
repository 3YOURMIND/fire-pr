import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.debug = true;
Vue.config.devtools = true;

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App),
});
