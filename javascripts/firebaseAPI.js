let uid = '';
let firebaseConfig = {};

const setUID = (newUID) => {
  uid = newUID;
};

const setFirebaseConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const getUID = () => {
  return uid;
};

const getFirebaseConfigObj = () => {
  return firebaseConfig;
};

// ********************** Setting up a new User Name ***********************

const checkUserNames = () => {
  const usernamesArray = [];
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/users.json`,
    })
      .done((allUsersObj) => {
        if (allUsersObj !== null) {
          Object.keys(allUsersObj).forEach((userKey) => {
            usernamesArray.push(allUsersObj[userKey].username);
          });
        }
        resolve(usernamesArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const saveUserNameOnRegister = (newUserObj) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/users.json`,
      data: JSON.stringify(newUserObj),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

// **************************************************************************

module.exports = {
  setUID,
  setFirebaseConfig,
  getUID,
  getFirebaseConfigObj,
  checkUserNames,
  saveUserNameOnRegister,
};
