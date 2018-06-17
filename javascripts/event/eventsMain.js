const events = require('./eventEvents');
// const eventFirebase = require('./eventFirebase');

const initial = () => {
  // events.getAllEventsEvent();
  events.initializer();
};

module.exports = {
  initial,
};
