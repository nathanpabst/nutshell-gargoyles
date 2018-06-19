const apiKeys = require('./apiKeys');
const events = require('./events');
const messagesEvents = require('./messages/messagesEvents');
const eventMain = require('./event/eventsMain');
const news = require('./news/newsMain');

const initializeApp = () => {
  apiKeys.getFirebaseConfig();
  events.authEvents();
  events.landingPageLinks();
  news.initializeNews();
  messagesEvents.activateChatModalEvent();
  messagesEvents.deactivateChatModalEvent();
  messagesEvents.postMessageToDBEvent();
  messagesEvents.getMessageFromDBEvent();
  messagesEvents.deleteMessageFromDBEvent();
  messagesEvents.getMessageForEditEvent();
  messagesEvents.editMessageInDBEvent();
  messagesEvents.setActiveUsernameEvent();
};

const eventInitialize = () => {

  eventMain.initial();
};

initializeApp();
eventInitialize();
