const messagesFirebaseAPI = require('./messagesFirebaseAPI');
const moment = require('../../lib/node_modules/moment');
const messagesDom = require('./messagesDom');

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

// Post message to database
const postMessageToDBEvent = () => {
  $(document).on('click','#chat-input-send-btn', () => {
    const messageToSave = {
      avatar: 'https://www.healthypawspetinsurance.com/Images/V3/DogAndPuppyInsurance/Dog_CTA_Desktop_HeroImage.jpg',
      message: $('#chat-input-message').val(),
      timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
      isEdited: false,
    };
    messagesFirebaseAPI.postMessageToDB(messageToSave)
      .then(() => {
        messagesDom.printMessage(messageToSave);
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

// Get message from database
const getMessageFromDBEvent = () => {
  $(document).on('click','#messagesBtn', () => {
    console.log('click');
    messagesFirebaseAPI.getMessageFromDB()
      .then((messagesArray) => {
        console.log(messagesArray);
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

module.exports = {
  activateChatModalEvent,
  deactivateChatModalEvent,
  postMessageToDBEvent,
  getMessageFromDBEvent,
};
