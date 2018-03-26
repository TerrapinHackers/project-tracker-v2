// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueFire from 'vuefire'
import router from './router'
import App from './App'

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

  /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// window.addEventListener('popstate', () => {
//   app.currentRoute = window.location.pathname
// })
