const firebaseAPI = require('./firebaseAPI');
const events = require('./events');
const messagesEvents = require('./messages/messagesEvents');

const initializeApp = () => {
  firebaseAPI.getFirebseConfig();
  events.authEvents();
  messagesEvents.activateChatModal();
  messagesEvents.deactivateChatModal();
  events.landingPageLinks();
};

initializeApp();
