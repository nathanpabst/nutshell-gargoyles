const eventDiv = $('#outPutContainer');

const createEventDom = (events) => {
  const eventName = $('#eventName').val();
  const eventDate = $('#eventDate').val();
  const eventLocation = $('#eventLocation').val();
  let domString = '';
  domString += `<div class = "events">`;
  domString += `<h2>Name of Event: ${eventName}</h2>`;
  domString += `<h4>Date: ${eventDate}</h4>`;
  domString += `<p>Location: ${eventLocation}</p>`;
  domString += `</div>`;
  printToDom(domString);
};

const printToDom = (events) => {
  eventDiv.append(events);
};

module.exports = {
  createEventDom,
};
