const eventDiv = $('#outPutContainer');

const createEventDom = (events) => {
  let domString = '';
  events.forEach((event) => {
    // domString += `<div class="row">`;
    domString += `<div class="col-md-6 col-md-offset-3">`;
    domString += `<div class = "thumbnail events" data-firebaseDb-id"${event.id}">`;
    domString += `<h2 class = "eName">Name of Event: ${event.eventName}</h2>`;
    domString += `<h4 class = "eDate" >Date: ${event.eventDate}</h4>`;
    domString += `<p class = "eLocation">Location: ${event.eventLocation}</p>`;
    domString += `<button class="btn btn-primary btn-sm" id ="editEvent">Edit</button>`;
    domString += `<button class='btn btn-warning btn-sm" id ="deleteEvent">Delete</button>`;
    domString += `</div>`;
    domString += `</div>`;
    // domString += `</div>`;
  });
  printToDom(domString);
};

const printToDom = (events) => {
  eventDiv.html(events);
};

module.exports = {
  createEventDom,
};
