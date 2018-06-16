const printMessages = (messagesArray) => {
  let domString = '';
  messagesArray.forEach((message) => {
    domString += `<li>`;
    domString += `  <div class="chat-message-wrapper-other">`;
    domString += `    <img src="${message.avatar}" alt="" class="chat-message-user-avatar chat-message-user-avatar-other">`;
    domString += `    <p class="chat-message-detail chat-message-detail-other">${message.message}</p>`;
    domString += `  </div>`;
    domString += `</li>`;
  });
  $('#chat-messagge-list').append(domString);
};

module.exports = {
  printMessages,
};
