const firebaseAPI = require('../firebaseAPI');
// let uid = '';
let firebaseConfig = {};

const getUidFirebaseConfig = () => {
  uid = firebaseAPI.getUID();
  firebaseConfig = firebaseAPI.getFirebaseConfigObj();
};

const getFriends = () => {
  return new Promise((resolve, reject) => {
    getUidFirebaseConfig();
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/friends.json`,
    })
      .done((allFriendsObj) => {
        if (allFriendsObj !== null) {
          Object.keys(allFriendsObj).forEach((friendKey) => {

          });
        }
      });
  });
};

const getUsers = () => {
  return new Promise((resolve, reject) => {
    getUidFirebaseConfig();
    const allUsersArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/users.json`,
    })
      .done((allUsersObj) => {
        if (allUsersObj !== null) {
          Object.keys(allUsersObj).forEach((userKey) => {
            const usernameAndUid = {
              username: allUsersObj[userKey].username,
              uid: allUsersObj[userKey].uid,
            };
            allUsersArray.push(usernameAndUid);
          });
        }
        resolve(allUsersArray);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  getFriends,
  getUsers,
};
