const taskButton = () => {
  let buttonString = '';
  buttonString += '<div class="create-task-btn">';
  buttonString += '<button id= "task-button" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Create a Task</button >';
  buttonString += '</div>';
  printToDom('#tasks-page', buttonString);
};

const taskModalForm = () => {
  let modalString = '';
  modalString += '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel task">';
  modalString += '<div class="modal-dialog" role="document">';
  modalString += '<div class="modal-content">';
  modalString += '<div class="modal-header">';
  modalString += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
  modalString += '<h4 class="modal-title text-center" id="myModalLabel">New Task</h4>';
  modalString += ' </div>';
  modalString += '<div class="row">';
  modalString += '<div class="modal-body input-group col-lg-6 col-lg-offset-3">';
  modalString += `<input id="input-modal "type="text" class="form-control grabTask" placeholder="Enter new task..." aria-label="...">`;
  // modalString += '<span class="input-group-addon">';
  // modalString += '<input type="checkbox" aria-label="...">';
  // modalString += '</span>';
  modalString += '</div>';
  modalString += '</div>';
  modalString += '<div class="modal-footer">';
  modalString += '<button id="close-task" type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
  modalString += '<button id="task-save-btn" type="button" class="btn btn-primary ">Save Task</button>';
  modalString += '</div>';
  modalString += '</div>';
  modalString += '</div>';
  modalString += '</div>';
  printToDom('#tasks-page', modalString);
};

const savedTaskDom = (taskArray) => {
  let taskString = '';
  taskArray.forEach((task) => {
    taskString += `<div class="col-sm-6 col-md-4 text-center"">`;
    taskString += `<div class="thumbnail">`;
    taskString += '<span class="input-group-addon">';
    taskString += '<input type="checkbox" aria-label="...">';
    taskString += '</span>';
    taskString += `<h3>${task.task}</h3>`;
    taskString += `<p><span class="btn btn-primary edit-btns glyphicon glyphicon-edit" text="edit" role="button"></span> <span class="btn btn-danger glyphicon glyphicon-trash delete-btns" role="button"></span></p>`;
    taskString += `</div>`;
    taskString += `</div>`;
  });
  printToDom('#tasks-page', taskString);
};

const printToDom = (id, string) => {
  $(id).append(string);
};

module.exports = {
  taskButton,
  taskModalForm,
  savedTaskDom,
};
