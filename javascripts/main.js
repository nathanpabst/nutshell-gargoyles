const firebaseAPI = require('./firebaseAPI');
const events = require('./events');
const landingPage = require('./landingPage');

const initializeApp = () => {
  firebaseAPI.getFirebseConfig();
  events.authEvents();
  landingPage.domStringLandingPage();
};

initializeApp();
