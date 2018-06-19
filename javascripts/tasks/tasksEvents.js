const tasks = require('./tasks');
const { savedTaskDom, } = require('./tasksDom');

const taskButtonEvent = () => {
  $('#myModal-task').on('shown.bs.modal', () => {
    $('#myInput').focus();
  });
};

const saveTasksEvent = () => {
  $(document).on('click', '#task-save-btn', (e) => {
    e.preventDefault();
    const taskInput = $('.grabTask').val();
    const taskToAdd = {
      task: taskInput,
      isCompleted: true,
    };
    $('body').removeClass('modal-open');
    $('div:last-child').last().remove();
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

const deleteTaskfromDb = () => {
  $(document).on('click', '.delete-btns', (e) => {
    const taskToDelete = $(e.target).closest('.tasks').data('firebaseDbId');
    tasks.deleteTask(taskToDelete)
      .then(() => {
        getSavedTasksEvent();
      })
      .catch((err) => {
        console.error('error in deleteTasks', err);
      });
  });
};

const taskEventInit = () => {
  taskButtonEvent();
  saveTasksEvent();
  deleteTaskfromDb();
};

module.exports = {
  taskEventInit,
  getSavedTasksEvent,
};
