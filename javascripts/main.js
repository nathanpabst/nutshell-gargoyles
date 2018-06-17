const apiKeys = require('./apiKeys');
const events = require('./events');
const eventMain = require('./event/eventsMain');
// const news = require('./news/newsMain');
const tasks = require ('./tasks/taskMain');

const initializeApp = () => {
  apiKeys.getFirebaseConfig();
  events.authEvents();
  tasks.initializeTaskApp();
  events.landingPageLinks();
};

const eventInitialize = () => {

  eventMain.initial();
};

initializeApp();
eventInitialize();
