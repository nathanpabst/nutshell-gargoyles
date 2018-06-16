const apiKeys = require('./apiKeys');
const events = require('./events');
const messagesEvents = require('./messages/messagesEvents');
const eventMain = require('./event/eventsMain');
const news = require('./news/newsMain');

const tasks = require ('./tasks/taskMain');

const initializeApp = () => {
  apiKeys.getFirebaseConfig();
  events.authEvents();
  tasks.initializeTaskApp();
  events.landingPageLinks();
  news.initializeNews();
  messagesEvents.activateChatModalEvent();
  messagesEvents.deactivateChatModalEvent();
  messagesEvents.postMessageToDBEvent();
};

const eventInitialize = () => {
  eventMain.initial();
};

initializeApp();
eventInitialize();
