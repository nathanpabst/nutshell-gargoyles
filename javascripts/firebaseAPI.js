const auth = require('./auth');

const getFirebseConfig = () => {
  return new Promise((resolve,reject) => {
    $.ajax('../db/apiKeys.json')
      .done((config) => {
        // initialize firebase
        firebase.initializeApp(config.apiKeys.firebaseDB);
        auth.checkLoginStatus();
        resolve(config);
      })
      .fail((err) => {
        console.error('Failed to retrieve Firbase config:',err);
      });
  });
};

module.exports = {
  getFirebseConfig,
};