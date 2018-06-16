const tasks = require('./tasks');

const taskButtonEvent = () => {
  $('#myModal').on('shown.bs.modal',  () => {
    $('#myInput').focus();
  });
};

const saveTasksEvent = () => {
  $('#task-save-btn').click((e) => {
    e.preventDefault();
    const taskInput = $('.grabTask').val();
    console.log('task', taskInput);
    const taskToAdd = {
      task: taskInput,
      isCompleted: true,
    };
    tasks.saveTasks(taskToAdd);
  });
};

const taskEventInit = () => {
  taskButtonEvent();
  saveTasksEvent();
};

module.exports = taskEventInit;
