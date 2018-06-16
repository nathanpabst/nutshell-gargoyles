const messagesFirebaseAPI = require('./messagesFirebaseAPI');
const moment = require('../../lib/node_modules/moment');

const activateChatModalEvent = () => {
  $(document).on('click','#messagesBtn', () => {
    $('#chat-modal').css('display', 'block');
  });
};

const deactivateChatModalEvent = () => {
  $(document).on('click','#close-chat-modal-btn', () => {
    $('#chat-modal').css('display', 'none');
  });
};

const getFirebaseConfigEvent = () => {
  messagesFirebaseAPI.getFirebaseConfig();
};

// Post message to database
const postMessageToDBEvent = () => {
  $(document).on('click','#chat-input-send-btn', () => {
    const messageToSave = {
      message: $('#chat-input-message').val(),
      timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
      isEdited: false,
    };
    messagesFirebaseAPI.postMessageToDB(messageToSave)
      .then(() => {
        console.log('Posted!');
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

module.exports = {
  activateChatModalEvent,
  deactivateChatModalEvent,
  getFirebaseConfigEvent,
  postMessageToDBEvent,
};
