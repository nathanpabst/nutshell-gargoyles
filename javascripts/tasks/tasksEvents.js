const taskButtonEvent = () => {
  $('#task-button').click((e) => {
    $('#authScreen').addClass('hide');
    $('#tasks-page').removeClass('hide');
  });
};

module.exports = taskButtonEvent;
