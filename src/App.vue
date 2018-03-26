<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
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
if (!Firebase.apps.length) {
  Firebase.initializeApp(config)
}
export default {
  name: 'app'
}
</script>