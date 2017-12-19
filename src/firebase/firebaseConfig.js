import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDo80SZ9CAjuA6bWBxqc6CEqp_eubyHlYE",
    authDomain: "reduxboilerplate.firebaseapp.com",
    databaseURL: "https://reduxboilerplate.firebaseio.com",
    projectId: "reduxboilerplate",
    storageBucket: "reduxboilerplate.appspot.com",
    messagingSenderId: "949437412579"
  };
  firebase.initializeApp(config);


export default firebase.storage();
