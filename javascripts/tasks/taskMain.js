const taskDom = require ('./tasksDom');
const taskEvent = require('./tasksEvents');

const initializeTaskApp = () => {
  taskDom();
  taskEvent.taskButton();
  taskEvent.taskModalForm();
};

module.exports = {
  initializeTaskApp,
};
