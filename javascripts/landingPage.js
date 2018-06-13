const outputDiv = $('#landing-page');

const printToDomLandingPage = (string) => {
  outputDiv.html(string);
};

const domStringLandingPage = () => {
  let domString = '';
  domString += `<div class="landing-page-elements">`;
  domString += `<div class="row">`;
  domString += `<div class="layoutDiv col-sm-2 col-sm-offset-3">`;
  domString +=  `<div class="dashboard-element text-center">`;
  domString +=    `<h3>Messages</h3>`;
  domString +=  `</div>`;
  domString += `</div>`;
  domString += `<div class="layoutDiv col-sm-2">`;
  domString +=  `<div class="dashboard-element text-center">`;
  domString +=    `<h3>Events</h3>`;
  domString +=  `</div>`;
  domString += `</div>`;
  domString += `<div class="layoutDiv col-sm-2">`;
  domString +=  `<div class="dashboard-element text-center">`;
  domString +=    `<h3>Tasks</h3>`;
  domString +=  `</div>`;
  domString += `</div>`;
  domString += `</div>`;
  domString += `<div class="row">`;
  domString += `<div class="layoutDiv col-sm-2 col-sm-offset-4">`;
  domString +=  `<div class="dashboard-element text-center">`;
  domString +=    `<h3>News</h3>`;
  domString +=  `</div>`;
  domString += `</div>`;
  domString += `<div class="layoutDiv col-sm-2">`;
  domString +=  `<div class="dashboard-element text-center">`;
  domString +=    `<h3>Friends</h3>`;
  domString +=  `</div>`;
  domString += `</div>`;
  domString += `</div>`;
  domString += `</div>`;
  printToDomLandingPage(domString);
};

module.exports = {
  domStringLandingPage,
};
