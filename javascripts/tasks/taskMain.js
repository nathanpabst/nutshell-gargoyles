const taskDom = require ('./tasksDom');
const taskEvent = require('./tasksEvents');

const initializeTaskApp = () => {
  taskDom.taskButton();
  taskDom.taskModalForm();
  taskEvent.getSavedTasksEvent();
  taskEvent.taskEventInit();
};

module.exports = {
  initializeTaskApp,
};
