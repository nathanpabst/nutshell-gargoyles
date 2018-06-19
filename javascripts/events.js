const firebaseAPI = require('./firebaseAPI');
const tasks = require('./tasks/taskMain');
const friendsMain = require('./friends/friendsMain');
const eventEvent = require('./event/eventEvents');
const news = require('./news/newsMain');

const landingPageLinks = () => {
  $('#messagesBtn').click(() => {
    $('#messages-page').removeClass('hide');
    $('#landing-page').addClass('hide');
  });
  $('#eventsBtn').click(() => {
    $('#events-page').removeClass('hide');
    $('#landing-page').addClass('hide');
    eventEvent.getAllEventsEvent();
  });
  $('#tasksBtn').click(() => {
    $('#tasks-page').removeClass('hide');
    $('#landing-page').addClass('hide');
    tasks.initializeTaskApp();
  });
  $('#newsBtn').click(() => {
    $('#news-page').removeClass('hide');
    $('#landing-page').addClass('hide');
    news.initializeNews();
  });
  $('#friendsBtn').click(() => {
    $('#friends-page').removeClass('hide');
    $('#landing-page').addClass('hide');
    friendsMain.initializer();
  });
  $('.go-home').click((e) => {
    $(e.target).closest('.module-container').addClass('hide');
    $('#landing-page').removeClass('hide');
  });
};

const authEvents = () => {
  $('#signin-btn').click((e) => {
    e.preventDefault();
    const email = $('#inputEmail').val();
    const pass = $('#inputPassword').val();

    firebase.auth().signInWithEmailAndPassword(email, pass)
      .catch((error) => {
        // Handle Errors here. When get error on sign-in
        $('#signin-error-msg').text(error.message);
        $('#signin-error').removeClass('hide');
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  });

  // Registration
  $('#register-btn').click(() => {
    const email = $('#registerEmail').val();
    const pass = $('#registerPassword').val();
    const userNameEntered = $('#registerUserName').val();
    firebaseAPI.checkUserNames()
      .then((usernamesArray) => {
        let usernameExists = false;
        for (let i = 0; i < usernamesArray.length; i++) {
          if (userNameEntered === usernamesArray[i]) {
            usernameExists = true;
            break;
          }
        }
        if (usernameExists === true) {
          const errorMessage = 'Sorry, that username already exists. Please choose a different username.';
          $('#register-error-msg').text(errorMessage);
          $('#register-error').removeClass('hide');
          console.error('Error registering');;
        } else {
          firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then((data) => {
              const newUserObj = {
                username: userNameEntered,
                uid: data.user.uid,
              };
              firebaseAPI.saveUserNameOnRegister(newUserObj);
            })
            .catch((error) => {
              // Handle Errors here.
              $('#register-error-msg').text(error.message);
              $('#register-error').removeClass('hide');
              const errorMessage = error.message;
              console.error(errorMessage);
            });
        }
      })
      .catch((err) => {
        console.error('Error with checking username against database', err);
      });
    // firebase.auth().createUserWithEmailAndPassword(email, pass)
    //   .then((data) => {
    //     const newUserObj = {
    //       username: userNameEntered,
    //       uid: data.user.uid,
    //     };
    //     firebaseAPI.saveUserNameOnRegister(newUserObj);
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     $('#register-error-msg').text(error.message);
    //     $('#register-error').removeClass('hide');
    //     const errorMessage = error.message;
    //     console.error(errorMessage);
    //   });
  });

  // switch to registration page
  $('#register-link').click((e) => {
    $('#login-form').addClass('hide');
    $('#registration-form').removeClass('hide');
  });

  // switch to login page
  $('#signin-link').click((e) => {
    $('#login-form').removeClass('hide');
    $('#registration-form').addClass('hide');
  });

  // log out
  $('#logoutBtn').click((e) => {
    firebase.auth().signOut().then(() => {
    // Sign-out successful.
      $('#logoutBtn').removeClass('hide');
    }).catch((error) => {
      console.error(error);
    });
  });
};

module.exports = {
  authEvents,
  landingPageLinks,
};
