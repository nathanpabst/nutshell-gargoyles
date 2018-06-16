const firebaseAPI = require('./firebaseAPI');
const messagesEvents = require('./messages/messagesEvents');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      firebaseAPI.setUID(user.uid);
      $('#landing-page').removeClass('hide');
      $('#logoutBtn').removeClass('hide');
      $('#authScreen').addClass('hide');
      $('#messages-page').addClass('hide');
      $('#tasks-page').addClass('hide');
      $('#news-page').addClass('hide');
      $('#friends-page').addClass('hide');
      $('#events-page').addClass('hide');

      messagesEvents.getFirebaseConfigEvent();
      console.log('I am in!');
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
