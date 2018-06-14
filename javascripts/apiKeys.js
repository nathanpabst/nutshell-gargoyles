const firebaseAPI = require('./firebaseAPI');
const auth = require('./auth');

const getFirebaseConfig = () => {
  return new Promise((resolve,reject) => {
    $.ajax('../db/apiKeys.json')
      .done((config) => {
        // initialize firebase
        firebase.initializeApp(config.apiKeys.firebaseDB);
        auth.checkLoginStatus();
        firebaseAPI.setFirebaseConfig(config);
        resolve(config);
      })
      .fail((err) => {
        console.error('Failed to retrieve Firbase config:',err);
      });
  });
};

module.exports = {
  getFirebaseConfig,
};
