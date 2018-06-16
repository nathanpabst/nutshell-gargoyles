// const dom = require('./eventsDom');
const eventFirebase = require('./eventFirebase');

const saveEvent = () => {
  $(document).on('click', '#saveBtn', (e) => {
    console.log(e);
    // const eventForm = $(e.target).closest('.modal.content');
    const eventName = $('#eventName').val();
    const eventDate = $('#eventDate').val();
    const eventLocation = $('#eventLocation').val();
    const eventToAdd = {
      eventName: eventName,
      eventDate: eventDate,
      eventLocation: eventLocation,
    };
    eventFirebase.saveEvent(eventToAdd);
  });
};

// const buttonEvent = () => {
//   $('#saveBtn').click(() => {
//     dom.createEventDom();
//   });
// };

const initializer = () => {
  // buttonEvent();
  saveEvent();
};

module.exports = {
  initializer,
};
