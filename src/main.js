import Vue from 'vue'
import App from './App.vue'
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import './assets/styles/main.css';

const PORT = '1337';
// const RASP_PI_IP = '192.168.1.73';
const RASP_PI_IP = 'localhost';

Vue.use(new VueSocketIO({
  debug: true,
  connection: io(`${RASP_PI_IP}:${PORT}`),
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
