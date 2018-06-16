const printMessage = (message) => {
  console.log(message);
  let domString = '';
  domString += `<li>`;
  domString += `  <div class="chat-message-wrapper-other">`;
  domString += `    <img src="${message.avatar}" alt="" class="chat-message-user-avatar chat-message-user-avatar-other">`;
  domString += `    <p class="chat-message-detail chat-message-detail-other">${message.message}</p>`;
  domString += `  </div>`;
  domString += `</li>`;
  $('#chat-messagge-list').append(domString);
};

module.exports = {
  printMessage,
};
