const firebaseAPI = require('./firebaseAPI');
const events = require('./events');

const initializeApp = () => {
  firebaseAPI.getFirebseConfig();
  events.authEvents();
  events.landingPageLinks();
};

initializeApp();
