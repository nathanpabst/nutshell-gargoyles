const firebaseAPI = require('./firebaseAPI');
const events = require('./events');
const eventMain = require('./event/eventsMain');
const news = require('./news/newsMain');

const tasks = require ('./tasks/taskMain');
const initializeApp = () => {
  firebaseAPI.getFirebseConfig();
  events.authEvents();
  tasks.initializeTaskApp();
  events.landingPageLinks();
  news.initializeNews();
};

const eventInitialize = () => {
  eventMain.initial();
};

initializeApp();
eventInitialize();
