const firebaseAPI = require('./firebaseAPI');
const events = require('./events');
const news = require('./news/newsMain');

const initializeApp = () => {
  firebaseAPI.getFirebseConfig();
  events.authEvents();
  events.landingPageLinks();
  news.initializeNews();
};

initializeApp();
