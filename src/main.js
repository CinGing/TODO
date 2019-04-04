
import Vue from 'vue'
import App from './App.vue'

import './assets/css/global.css'

// import './assets/styles/test.css'
// import './assets/styles/test-stylus.styl'
// import './assets/images/background-image.jpg'

const root =  document.createElement('div');
document.body.appendChild(root);

new Vue({
	render:(h)=>h(App)
}).$mount(root);