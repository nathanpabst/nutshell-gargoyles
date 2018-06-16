const firebaseAPI = require('../firebaseAPI');

let firebaseConfig = {};
let userId = '';

const getFirebaseConfig = () => {
  firebaseConfig = firebaseAPI.getFirebaseConfigObj();
  userId = firebaseAPI.getUID();
  console.log(firebaseConfig.apiKeys.firebaseDB.databaseURL);
  console.log(userId);
};

// Post message to database
const postMessageToDB = (messageToSave) => {
  getFirebaseConfig();
  return new Promise((resolve,reject) => {
    messageToSave.userUid = userId;

    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/messages.json`,
      data: JSON.stringify(messageToSave),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

// Get message from database
const getMessageFromDB = () => {
  getFirebaseConfig();
  return new Promise((resolve,reject) => {
    const messagesArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/messages.json`,
    })
      .done((allMessages) => {
        if (allMessages !== null) {
          Object.keys(allMessages).forEach((fbKey) => {
            allMessages[fbKey].id = fbKey;
            messagesArray.push(allMessages[fbKey]);
          });
        };
        resolve(messagesArray);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  getFirebaseConfig,
  postMessageToDB,
  getMessageFromDB,
};
