const firebaseAPI = require('./firebaseAPI');
const events = require('./events');
const tasks = require ('./tasks/taskMain');
const initializeApp = () => {
  firebaseAPI.getFirebseConfig();
  events.authEvents();
  tasks.initializeTaskApp();
  events.landingPageLinks();
};

initializeApp();
