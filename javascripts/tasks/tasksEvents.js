const taskButtonEvent = () => {
  $('#task-button').click((e) => {
    $('#authScreen').addClass('hide');
  });
};

module.exports = taskButtonEvent;
