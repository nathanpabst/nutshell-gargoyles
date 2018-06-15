const taskButton = () => {
  let taskString = '';
  taskString = '<button id= "task-button" type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Create a Task</button >';
  printToDom('#tasks-page', taskString);
};

const taskModalForm = () => {
  let modalString = '';
  modalString += '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
  modalString += '<div class="modal-dialog" role="document">';
  modalString += '<div class="modal-content">';
  modalString += '<div class="modal-header">';
  modalString += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
  modalString += '<h4 class="modal-title text-center" id="myModalLabel">New Task</h4>';
  modalString += ' </div>';
  modalString += '<div class="row">';
  modalString += '<div class="modal-body input-group col-lg-6 col-lg-offset-3">';
  modalString += '<input type="text" class="form-control" aria-label="...">';
  modalString += '<span class="input-group-addon">';
  modalString += '<input type="checkbox" aria-label="...">';
  modalString += '</span>';
  modalString += '</div>';
  modalString += '</div>';
  modalString += '<div class="modal-footer">';
  modalString += '<button id="task-exit" type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
  modalString += '<button id="task-save-btn" type="button" class="btn btn-primary">Save Task</button>';
  modalString += '</div>';
  modalString += '</div>';
  modalString += '</div>';
  modalString += '</div>';
  printToDom('#tasks-page', modalString);
};

const savedTaskDom = () => {
  let taskString = '';
  taskString += '<div class="well">'
  taskString += '...';
  taskString += '</div>';
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
