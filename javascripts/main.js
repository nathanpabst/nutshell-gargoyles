const firebaseAPI = require('./firebaseAPI');
const events = require('./events');
const eventMain = require('./event/eventsMain');

const initializeApp = () => {
  firebaseAPI.getFirebseConfig();
  events.authEvents();
  events.landingPageLinks();
};

const eventInitialize = () => {
  eventMain.initial();
};

initializeApp();
eventInitialize();
