const taskDom = require ('./tasksDom');
const taskEvent = require('./tasksEvents');

const initializeTaskApp = () => {
  taskDom();
  taskEvent();
};

module.exports = {
  initializeTaskApp,
};
