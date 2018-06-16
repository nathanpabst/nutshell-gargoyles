const apiKeys = require('./apiKeys');
const events = require('./events');

const tasks = require ('./tasks/taskMain');

const initializeApp = () => {
  apiKeys.getFirebaseConfig();
  events.authEvents();
  tasks.initializeTaskApp();
  events.landingPageLinks();
};

initializeApp();
