const firebaseAPI = require('./firebaseAPI');
const friendsFirebase = require('./friends/friendsFirebase');

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
      $('#authBtn').addClass('hide');
      $('.go-home').click((e) => {
        $(e.target).closest('.module-container').addClass('hide');
        $('#messages-page').addClass('hide');
        $('#tasks-page').addClass('hide');
        $('#news-page').addClass('hide');
        $('#friends-page').addClass('hide');
        $('#events-page').addClass('hide');
        $('#landing-page').removeClass('hide');
      });
      friendsFirebase.getUidFirebaseConfig();
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
      $('#authBtn').removeClass('hide');
      $('.go-home').unbind('click');
    };
  });
};

module.exports = {
  checkLoginStatus,
};
