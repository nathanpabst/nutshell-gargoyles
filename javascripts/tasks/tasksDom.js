const taskButton = () => {
  let taskString = '';
  taskString = '<button id= "task-button" type="button" class="btn btn-primary btn-lg active">Create a Task</button>';
  printToDom('#tasks-page', taskString);
};

const printToDom = (id, string) => {
  $(id).html(string);
};

module.exports = taskButton;
