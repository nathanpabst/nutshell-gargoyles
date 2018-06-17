const tasks = require('./tasks');
const {savedTaskDom,} = require('./tasksDom');

const taskButtonEvent = () => {
  $('#myModal').on('shown.bs.modal',  () => {
    $('#myInput').focus();
  });
};

const saveTasksEvent = () => {
  $('#task-save-btn').click((e) => {
    e.preventDefault();
    const taskInput = $('.grabTask').val();
    const taskToAdd = {
      task: taskInput,
      isCompleted: true,
    };
    tasks.saveTasks(taskToAdd)
      .then(() => {
        getSavedTasksEvent();
      });
  });
};

const getSavedTasksEvent = () => {
  tasks.getSavedTasks()
    .then((tasksArray) => {
      savedTaskDom(tasksArray);
    })
    .catch((error) => {
      console.error('error in getSavedTasks Event', error);
    });
};

const taskEventInit = () => {
  taskButtonEvent();
  saveTasksEvent();
};

module.exports = {
  taskEventInit,
  getSavedTasksEvent,

};
