const apiKeys = require('./apiKeys');
const events = require('./events');
const messagesEvents = require('./messages/messagesEvents');
const eventMain = require('./event/eventsMain');
const news = require('./news/newsMain');
const tasks = require ('./tasks/taskMain');
const friendsEvents = require('./friends/friendsEvents');

const initializeApp = () => {
  apiKeys.getFirebaseConfig();
  events.authEvents();
  tasks.initializeTaskApp();
  events.landingPageLinks();
  news.initializeNews();
  friendsEvents.showPendingFriendRequests();
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
