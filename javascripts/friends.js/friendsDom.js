const outputDiv = $('#gargoylesConatainer');

const printToDom = (string) => {
  outputDiv.html(string);
};

const acceptedFriendList = () => {
  let domString = '';
  domString +=  `<div>`;
  domString +=    `<h1>Friends List</h1>`;
  domString +=  `</div>`;
  printToDom(domString);
};

module.exports = {
  acceptedFriendList,
};
