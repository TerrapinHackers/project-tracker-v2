<!-- App.vue
  This component is the root component for our Vue application. It is rendered
  in the project root's index.html file with the <div id="app"> tag. The Firebase
  instance exists only within this component.
-->
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="http://terrapinhackers.com/"><img src="../assets/th-logo.svg"/></a>
      <a class="navbar-brand" href="#">Projects</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="dashboard.html">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="reporting.html">Reporting</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="login.html">Login <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container"> 
      <div class="row login-row">
        <div class="col-md-4 offset-md-4">
          <h1>Login</h1>
          <form class="login-form" v-on:submit.prevent="SignUp"> 
            <div class = "form-group">
                <label for="input-name" class="bmd-label-floating">Full Name</label>
                <input type="text" class="form-control" id="input-name" v-model="user.Name">
            <div class="form-group">
              <label for="input-email" class="bmd-label-floating">Email address</label>
              <input type="email" class="form-control" id="input-email" v-model="user.Username">
            </div>
            <div class="form-group">
              <label for="input-password" class="bmd-label-floating">Password</label>
              <input type="password" class="form-control" id="input-password" v-model="user.Password">
            </div>
            <div class="form-group">
                <label for="input-passwordConfirm" class+'bmd-label-floating'>Confirm Password</label>
                <input type="password" class="form-control" id="input-passwordConfirm" v-model="user.PasswordConfirm">
            </div>
            <div class="form-group">
              <button id = "submit_button" type="submit" class="btn btn-primary btn-raised">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Hello from '../components/Hello'

  // This line is new!
  import Firebase from 'firebase'

  /*
   * The config was copied and pasted straight from the Firebase Dashboard.
   * Simply click "Add Firebase to Your Web App" to access yours.
   */

  let config = {
    apiKey: 'AIzaSyBliLgMQpiahmZl0OWdCZhT1mHOaJ0FBCE',
    authDomain: 'project-tracker-th.firebaseapp.com',
    databaseURL: 'https://project-tracker-th.firebaseio.com',
    projectId: 'project-tracker-th',
    storageBucket: 'project-tracker-th.appspot.com',
    messagingSenderId: '997645017628'
  }

  // Here we are initializing the Firebase connection.
  Firebase.initializeApp(config)
  // var provider = Firebase.auth.EmailAuthProvider()
  // Accessing the greetings reference; .ref() takes a URL as its parameter.

  export default {
    name: 'app',

    /*
     * This section is added to the original CLI-generated App component. This
     * is where VueFire comes into play, allowing us to link our Vue app to
     * Firebase data relatively simply. More information is on the GitHub page:
     *
     * https://github.com/vuejs/vuefire/
     */

    data () {
      return {
        user: {
          Name: '',
          Username: '',
          Password: '',
          PasswordConfirm: ''
        }
      }
    },

    // We have added a simple method to add new greetings to our Firebase.
    methods: {
      SignUp: function (event) {
        const db = firebase.database()
        if (this.user.Password == this.user.PasswordConfirm) {
          const email = this.user.Username
          const pass = this.user.Password
          const auth = Firebase.auth()
          const promise = auth.createUserWithEmailAndPassword(email, pass).then( function (newUser) {
              db.ref('users/${newUser.uid}').set( { name: this.user.Name } )
          })
          th
          this.user.Username = ''
          this.user.Password = ''
          
          promise.catch(event => console.log(event.message))
        }
 
      }
    },

    components: {
      Hello
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .login-row {
    margin-top: 20px; 
  }
  .login-form .btn-primary {
    background-color: #D92B30 !important;
    border-color: #D92B30 !important;
  }

  .is-focused [class^=bmd-label] {
    color: #D92B30 !important;
  }

  .is-focused .form-control {
    background-image: linear-gradient(0deg,#D92B30 2px,rgba(0,150,136,0) 0),linear-gradient(0deg,rgba(0,0,0,.26) 1px,transparent 0);
  }

</style>
