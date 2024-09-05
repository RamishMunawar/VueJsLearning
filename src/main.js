import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'

// Vue.filter('uCase', function (value) {
//     return value.toUpperCase();
//   });
  

createApp(App).mount('#app')