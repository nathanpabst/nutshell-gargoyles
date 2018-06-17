const dom = require('./eventsDom');
const eventFirebase = require('./eventFirebase');

const formEvent = () => {
  $('#addEventBtn').click(() => {
    $('#formContainer').removeClass('hide');
    $('#outPutContainer').addClass('hide');
  });
  $('#closeBtn').click(() => {
    $('#formContainer').addClass('hide');
    $('#outPutContainer').removeClass('hide');
    updateEventsEvent();
  });
};

const saveEvent = () => {
  $(document).on('click', '#saveBtn', (e) => {
    console.log(e);
    // const eventForm = $(e.target).closest('.modal.content');
    const eventName = $('#name').val();
    const eventDate = $('#date').val();
    const eventLocation = $('#location').val();
    const eventToAdd = {
      eventName: eventName,
      eventDate: eventDate,
      eventLocation: eventLocation,
    };
    eventFirebase.saveToFireBase(eventToAdd)
      .then(() => {
        getAllEventsEvent();
      });
  });
};

const getAllEventsEvent = () => {
  eventFirebase.getEvent()
    .then((eventArray) => {
      dom.createEventDom(eventArray);
    })
    .catch((error) => {
      console.error('error in get all event:', error);
    });
};

const updateEventsEvent = () => {
  // editButtonEvent();
  $(document).on('click','#editEvent', (e) => {
    console.log('updateEvent:', e);
    const eventToUpdateId = $(e.target).closest('.events').data('firebaseDbId');
    console.log('event to update id - data attribute:',eventToUpdateId);
    const eventToUpdateCard = $(e.target).closest('.events');
    const updateEvent = {
      eventName: eventToUpdateCard.find('.eName').text(),
      eventDate: eventToUpdateCard.find('.eDate').text(),
      eventLocation: eventToUpdateCard.find('.eLocation').text(),
    };
    console.log(updateEvent);
    eventFirebase.updateEventFb(updateEvent, eventToUpdateId)
      .then(() => {
        getAllEventsEvent();
      })
      .catch((error) => {
        console.error('error in update event:', error);
      });
  });
};

// const buttonEvent = () => {
//   $('#saveBtn').click(() => {
//     dom.createEventDom();
//   });
// };

const initializer = () => {
  // buttonEvent();
  formEvent();
  saveEvent();
  updateEventsEvent();
};

module.exports = {
  initializer,
  getAllEventsEvent,
};
