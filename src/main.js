// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueFire from 'vuefire'
import router from './router'
import App from './App'
import firebase from 'firebase'

// import HomePage from './views/Home'

/*
 * Because we installed VueFire via npm and imported it as a module, we have
 * to add this little snippet of code to 'install' it. If you include the lib
 * via typical <script> tags in your HTML document, this isn't required.
 */
  // const Home = { template: '<App/>', components: {  } }
// const Login = { template: '<p>Login</p>' }

Vue.use(VueFire)
Vue.config.productionTip = false

let app
let config = {
  apiKey: 'AIzaSyBliLgMQpiahmZl0OWdCZhT1mHOaJ0FBCE',
  authDomain: 'project-tracker-th.firebaseapp.com',
  databaseURL: 'https://project-tracker-th.firebaseio.com',
  projectId: 'project-tracker-th',
  storageBucket: 'project-tracker-th.appspot.com',
  messagingSenderId: '997645017628'
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })
  }
})
  /* eslint-disable no-new */

// window.addEventListener('popstate', () => {
//   app.currentRoute = window.location.pathname
// })
