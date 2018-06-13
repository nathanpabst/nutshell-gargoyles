let userId = '';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      console.log('I am in!');
      userId = user.uid;
      console.log(userId);
    } else {
      // No user is signed in.
      console.log('I am out');
    };
  });
};

module.exports = {
  checkLoginStatus,
};
