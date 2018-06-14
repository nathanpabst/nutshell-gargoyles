const taskButtonEvent = () => {
  $('#myModal').on('shown.bs.modal',  () => {
    $('#myInput').focus();
  });
};

module.exports = taskButtonEvent;
