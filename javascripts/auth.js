const firebaseAPI = require('./firebaseAPI');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      // move it from log in event *******

    } else {
      // No user is signed in.
      // move it from log out event ------
    };
  });
};
