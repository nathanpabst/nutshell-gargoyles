const printMessages = (messagesArray) => {
  let domString = '';
  messagesArray.forEach((message) => {
    domString += `<li id="${message.id}">`;
    domString += `  <div class="chat-message-wrapper-other">`;
    domString += `    <img src="${message.avatar}" alt="" class="chat-message-user-avatar chat-message-user-avatar-other">`;
    domString += `    <p class="chat-message-detail chat-message-detail-other">${message.message}</p>`;
    domString += `    <div class="btn-group" role="group" aria-label="...">`;
    domString += `      <button type="button" class="btn btn-default chat-message-edit-btn" data-toggle="modal" data-target="#myModal-edit"><span class="glyphicon glyphicon-pencil"></span>Edit</button>`;
    domString += `      <button type="button" class="btn btn-default chat-message-delete-btn"><span class="glyphicon glyphicon-trash"></span>Delete</button>`;
    domString += `    </div>`;
    domString += `  </div>`;
    domString += `</li>`;
  });
  $('#chat-messagge-list').html(domString);
};

module.exports = {
  printMessages,
};
