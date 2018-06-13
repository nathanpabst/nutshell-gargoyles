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
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .catch((error) => {
        // Handle Errors here.
        $('#register-error-msg').text(error.message);
        $('#register-error').removeClass('hide');
        const errorMessage = error.message;
        console.error(errorMessage);
      });
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
    }).catch((error) => {
      console.error(error);
    });
  });
};

module.exports = {
  authEvents,
};
