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

module.exports = {
  getFirebaseConfig,
  postMessageToDB,
};
