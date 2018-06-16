const apiKeys = require('./apiKeys');
const events = require('./events');
const eventMain = require('./event/eventsMain');
const tasks = require('./tasks/taskMain');
const news = require('./news/newsMain');

const initializeApp = () => {
  apiKeys.getFirebaseConfig();
  events.authEvents();
  events.landingPageLinks();
  news.initializeNews();
  tasks.initializeTaskApp();
};

const eventInitialize = () => {
  eventMain.initial();
};

initializeApp();
eventInitialize();
