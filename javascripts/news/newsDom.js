const addArticleButton = () => {
  let output = '';
  output += `<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Add an article</button>`;
  printToDom(output);
};

const printModalForm = () => {
  let output = '';
  output += `<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Article title:</h4>
        <h4 class="modal-title" id="myModalLabel">Synapsis:</h4>
        <h4 class="modal-title" id="myModalLabel">URL:</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;
  printToDom(output);
};

const printToDom = (stringz) => {
  $('#news-page').append(stringz);
};

module.exports = {
  printModalForm,
  addArticleButton,
};
