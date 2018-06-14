const apiKeys = require('./apiKeys');
const events = require('./events');

const initializeApp = () => {
  apiKeys.getFirebaseConfig();
  events.authEvents();
  events.landingPageLinks();
};

initializeApp();
