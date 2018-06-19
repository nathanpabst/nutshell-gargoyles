const eventDiv = $('#outPutContainer');

const createEventDom = (events) => {
  let domString = '';
  events.forEach((event) => {
    // domString += `<div class="row">`;
    domString += `<div class="col-md-6 col-md-offset-3">`;
    domString += `<div class = "thumbnail events" data-firebase-db-id="${event.id}">`;
    domString += `<h2 class = "eName" Name of Event:> ${event.eventName}</h2>`;
    domString += `<h4 class = "eDate" Date:> ${event.eventDate}</h4>`;
    domString += `<p class = "eLocation" Location:> ${event.eventLocation}</p>`;
    domString += `<button type="button" class="btn btn-success" id="editEventBtn"><span class="glyphicon glyphicon-pencil"></span></button>`;
    domString += `<button type="button" class="btn btn-danger deleteEventBtn"><span class="glyphicon glyphicon-remove"></span></button>`;
    domString += `</div>`;
    domString += `</div>`;
    // domString += `</div>`;
  });
  printToDom(domString);
};

const printToDom = (events) => {
  eventDiv.html(events);
  $('#editCloseBtn').click(() => {
    $('#addFormContainer').addClass('hide');
    $('#outPutContainer').removeClass('hide');
    $('#editFormContainer').addClass('hide');
  });
};

module.exports = {
  createEventDom,
};
