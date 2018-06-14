let userId = '';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      $('#landing-page').removeClass('hide');
      $('#logoutBtn').removeClass('hide');
      $('#authScreen').addClass('hide');
      $('#messages-page').addClass('hide');
      $('#tasks-page').addClass('hide');
      $('#news-page').addClass('hide');
      $('#friends-page').addClass('hide');
      $('#events-page').addClass('hide');
      console.log('I am in!');
      userId = user.uid;
      console.log(userId);
    } else {
      // No user is signed in.
      $('#authScreen').removeClass('hide');
      $('#landing-page').addClass('hide');
      $('#logoutBtn').addClass('hide');
      $('#messages-page').addClass('hide');
      $('#tasks-page').addClass('hide');
      $('#news-page').addClass('hide');
      $('#friends-page').addClass('hide');
      $('#events-page').addClass('hide');
      console.log('I am out');
    };
  });
};

module.exports = {
  checkLoginStatus,
};
