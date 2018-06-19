const apiKeys = require('./apiKeys');
const events = require('./events');
const messagesEvents = require('./messages/messagesEvents');
const eventMain = require('./event/eventsMain');
const news = require('./news/newsMain');
const {getMessage,scrollToBottomEvent,} = require('./messages/messagesEvents');

const initializeApp = () => {
  apiKeys.getFirebaseConfig();
  events.authEvents();
  events.landingPageLinks();
  news.initializeNews();
  messagesEvents.activateChatModalEvent();
  messagesEvents.deactivateChatModalEvent();
  messagesEvents.postMessageToDBEvent();
  window.setInterval(() => {
    getMessage();
    scrollToBottomEvent();
  }, 1000);
  messagesEvents.deleteMessageFromDBEvent();
  messagesEvents.getMessageForEditEvent();
  messagesEvents.editMessageInDBEvent();
  messagesEvents.setActiveUsernameEvent();
  messagesEvents.backToMainPage();
};

const eventInitialize = () => {
  eventMain.initial();
};

initializeApp();
eventInitialize();
