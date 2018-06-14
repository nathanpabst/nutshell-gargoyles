const dom = require('./eventsDom');

const buttonEvent = () => {
  $('#saveBtn').click(() => {
    dom.createEventDom();
  });
};

const initializer = ()  => {
  buttonEvent();
};

module.exports = {
  initializer,
};
