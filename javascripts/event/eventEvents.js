const dom = require('./eventsDom');
const eventFirebase = require('./eventFirebase');

const formEvent = () => {
  // e.preventDefault();
  $('#addEventBtn').click(() => {
    $('#addFormContainer').removeClass('hide');
    $('#outPutContainer').addClass('hide');
    $('#editFormContainer').addClass('hide');
  });
  $('#closeBtn').click(() => {
    $('#addFormContainer').addClass('hide');
    $('#outPutContainer').removeClass('hide');
    $('#editFormContainer').addClass('hide');
  });
};

// const editEvent = () => {
//   dom.createEventDom();
//   $('#editEventBtn').click(() => {
//     $('#addFormContainer').addClass('hide');
//     $('#outPutContainer').addClass('hide');
//     $('#editFormContainer').removeClass('hide');
//   });
// };

const saveEvent = () => {
  $(document).on('click', '#saveBtn', (e) => {
    // e.preventDefault();
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
    $('#name').val('');
    $('#date').val('');
    $('#location').val('');
  });
};

const getAllEventsEvent = () => {
  eventFirebase.getEvent()
    .then((eventArray) => {
      dom.createEventDom(eventArray);
      console.log(eventArray);
    })
    .catch((error) => {
      console.error('error in get all event:', error);
    });
};

const deleteEvent = () => {
  $(document).on('click', '.deleteEventBtn', (e) => {
    const eventToDeleteId = $(e.target).closest('.events').data('firebaseDbId');
    console.log('event to delete id - data attribute:', eventToDeleteId);
    eventFirebase.deleteEventFromDb(eventToDeleteId)
      .then(() => {
        getAllEventsEvent();
      })
      .catch((error) => {
        console.error('error from delete event:', error);
      });
  });
};

let eventToUpdateId = '';

const updateEventsEvent = () => {
  $(document).on('click', '#editEventBtn', (e) => {
    $('#addFormContainer').addClass('hide');
    $('#outPutContainer').addClass('hide');
    $('#editFormContainer').removeClass('hide');
    eventToUpdateId = $(e.target).closest('.events').data('firebaseDbId');
    console.log('event to update id - data attribute:', eventToUpdateId);

    const eventToUpdateCard = $(e.target).closest('.events');
    // const updateEvent = {
    const eventName = eventToUpdateCard.find('.eName').html();
    const eventDate = eventToUpdateCard.find('.eDate').html();
    const eventLocation = eventToUpdateCard.find('.eLocation').html();
    $('#editName').val(eventName);
    $('#editDate').val(eventDate);
    $('#editLocation').val(eventLocation);
  });
};

const saveEditEvent = () => {
  $(document).on('click', '#editSaveBtn', (e) => {
    const editName = $('#editName').val();
    const editDate = $('#editDate').val();
    const editLocation = $('#editLocation').val();
    // const eventToUpdateId = $(e.target).closest('.events').data('firebaseDbId');
    console.log('event to save id - data attribute:', eventToUpdateId);
    const updateEvent = {
      eventName: editName,
      eventDate: editDate,
      eventLocation: editLocation,
    };
    console.log(updateEvent);
    eventFirebase.updateEventFb(updateEvent, eventToUpdateId)
      .then(() => {
        getAllEventsEvent();
        console.log('working?');
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
  // updateEventsEvent();
  deleteEvent();
  // editButtonEvent();
  updateEventsEvent();
  saveEditEvent();
};

module.exports = {
  initializer,
  getAllEventsEvent,
};
