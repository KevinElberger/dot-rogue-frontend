import Vue from 'vue'
import App from './App.vue'
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import router from './router'
import './assets/styles/main.css'

const PORT = '1337';

const ip = prompt('Enter the Raspberry Pi IP address (leave blank for localhost)');

// const RASP_PI_IP = '192.168.1.73';
const RASP_PI_IP = ip || 'localhost';

Vue.use(new VueSocketIO({
  debug: true,
  connection: io(`${RASP_PI_IP}:${PORT}`),
}))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
