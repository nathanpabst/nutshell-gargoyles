const firebaseAPI = require('../firebaseAPI');

let firebaseConfig = {};
let userId = '';
let activeUsername = '';

const getActiveUsername = () => {
  return activeUsername;
};

const getFirebaseConfig = () => {
  firebaseConfig = firebaseAPI.getFirebaseConfigObj();
  userId = firebaseAPI.getUID();
};

// Post message to database
const postMessageToDB = (messageToSave) => {
  getFirebaseConfig();
  return new Promise((resolve,reject) => {
    messageToSave.userUid = userId;
    messageToSave.username = activeUsername;

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

// Delete message in database
const deleteMessageFromDB = (messageId) => {
  return new Promise((resolve,reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/messages/${messageId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((err) => {
        reject(err);
      });
  });
};

// Edit exising message
const editMessageInDB = (messageToEdit,messageId) => {
  return new Promise((resolve,reject) => {
    messageToEdit.userUid = userId;
    messageToEdit.username = activeUsername;
    $.ajax({
      method: 'PUT',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/messages/${messageId}.json`,
      data: JSON.stringify(messageToEdit),
    })
      .done(() => {
        resolve();
      })
      .fail((err) => {
        reject(err);
      });
  });
};

// get all users from user table then assign to local variable
const getUsersFromDB = () => {
  getFirebaseConfig();
  return new Promise((resolve,reject) => {
    const usersArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/users.json`,
    })
      .done((allUsers) => {
        if (allUsers !== null) {
          Object.keys(allUsers).forEach((fbKey) => {
            allUsers[fbKey].id = fbKey;
            usersArray.push(allUsers[fbKey]);
          });
        };
        resolve(usersArray);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

// Set active user's username
const setActiveUsername = () => {
  getUsersFromDB()
    .then((allUsers) => {
      allUsers.forEach((user) => {
        if (user.uid === userId) {
          activeUsername = user.username;

          $('#chat-active-user-name').html(activeUsername);
        };
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  getFirebaseConfig,
  postMessageToDB,
  getMessageFromDB,
  deleteMessageFromDB,
  editMessageInDB,
  getUsersFromDB,
  setActiveUsername,
  getActiveUsername,
};
