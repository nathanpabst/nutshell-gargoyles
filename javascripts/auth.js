const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      console.log('I am in!');
    } else {
      // No user is signed in.
    };
  });
};

module.exports = {
  checkLoginStatus,
};
