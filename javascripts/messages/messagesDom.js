const firebaseAPI = require('../firebaseAPI');

// compare all user IDs in database
// if the active user id is same as the user id that stores for the message
// then keep the message on the left
// otherwise keep on the right
const printMessages = (messagesArray) => {
  const activeUserId = firebaseAPI.getUID();
  let domString = '';
  console.log(messagesArray);
  console.log(activeUserId);
  messagesArray.forEach((message) => {
    domString += `<li data-message-id="${message.id}" data-user-id='${message.userUid}'>`;
    if (activeUserId === message.userUid) {
      domString += `  <div class="chat-message-wrapper chat-message-wrapper-me">`;
      domString += `    <img src="${message.avatar}" alt="" class="chat-message-user-avatar chat-message-user-avatar-me">`;
      domString += `    <p class="chat-message-detail chat-message-timestamp-me">${message.username}: ${message.timestamp}</p>`;
      domString += `    <p class="chat-message-detail chat-message-detail-me">${message.message}</p>`;
      domString += `    <div class="btn-group chat-message-btn-group chat-message-btn-group-me" role="group" aria-label="...">`;
      domString += `      <button type="button" class="btn btn-default chat-message-edit-btn" data-toggle="modal" data-target="#myModal-edit"><span class="glyphicon glyphicon-pencil"></span>Edit</button>`;
      domString += `      <button type="button" class="btn btn-default chat-message-delete-btn"><span class="glyphicon glyphicon-trash"></span>Delete</button>`;
      domString += `    </div>`;
    } else {
      domString += `  <div class="chat-message-wrapper chat-message-wrapper-other">`;
      domString += `    <img src="${message.avatar}" alt="" class="chat-message-user-avatar chat-message-user-avatar-other">`;
      domString += `    <p class="chat-message-detail chat-message-timestamp-other">${message.username}: ${message.timestamp}</p>`;
      domString += `    <p class="chat-message-detail chat-message-detail-other">${message.message}</p>`;
      domString += `    <div class="btn-group chat-message-btn-group chat-message-btn-group-other" role="group" aria-label="...">`;
      domString += `      <button type="button" class="btn btn-default chat-message-edit-btn" data-toggle="modal" data-target="#myModal-edit"><span class="glyphicon glyphicon-pencil"></span>Edit</button>`;
      domString += `      <button type="button" class="btn btn-default chat-message-delete-btn"><span class="glyphicon glyphicon-trash"></span>Delete</button>`;
      domString += `    </div>`;
    };
    // domString += `    <div class="btn-group chat-message-btn-group" role="group" aria-label="...">`;
    // domString += `      <button type="button" class="btn btn-default chat-message-edit-btn" data-toggle="modal" data-target="#myModal-edit"><span class="glyphicon glyphicon-pencil"></span>Edit</button>`;
    // domString += `      <button type="button" class="btn btn-default chat-message-delete-btn"><span class="glyphicon glyphicon-trash"></span>Delete</button>`;
    // domString += `    </div>`;
    domString += `  </div>`;
    domString += `</li>`;
  });
  $('#chat-messagge-list').html(domString);
};

module.exports = {
  printMessages,
};
