const taskButton = () => {
  let taskString = '';
  taskString = '<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Create a Task</button >';
  printToDom('#tasks-page', taskString);
};

const taskModalForm = () => {
  let modalString = '';
  modalString = '';
  modalString += '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';
  modalString += '<div class="modal-dialog" role="document">';
  modalString += '<div class="modal-content">';
  modalString += '<div class="modal-header">';
  modalString += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
  modalString += '<h4 class="modal-title" id="myModalLabel">Modal title</h4>';
  modalString += ' </div>';
  modalString += '<div class="modal-body">';
  modalString += '...';
  modalString += '</div>';
  modalString += '<div class="modal-footer">';
  modalString += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
  modalString += '<button type="button" class="btn btn-primary">Save changes</button>';
  modalString += '</div>';
  modalString += '</div>';
  modalString += '</div>';
  modalString += '</div>';
  printToDom('#tasks-page', modalString);
};

const printToDom = (id, string) => {
  $(id).html(string);
};

module.exports = {
  taskButton,
  taskModalForm,
};
