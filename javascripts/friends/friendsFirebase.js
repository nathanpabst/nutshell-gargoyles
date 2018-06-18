const firebaseAPI = require('../firebaseAPI');
let uid = '';
let firebaseConfig = {};

const getUidFirebaseConfig = () => {
  uid = firebaseAPI.getUID();
  firebaseConfig = firebaseAPI.getFirebaseConfigObj();
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

const requestAFriend = (friendUID) => {
  const friendRequestObj = {
    userUid: uid,
    friendUid: friendUID,
    isAccepted: false,
    isPending: true,
  };
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/friends.json`,
      data: JSON.stringify(friendRequestObj),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const acceptAFriend = (modifiedFriendship, id) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'PUT',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/friends/${id}.json`,
      data: JSON.stringify(modifiedFriendship),
    })
      .done((updatedFriendshipFromFirebase) => {
        resolve(updatedFriendshipFromFirebase);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const deleteAFriend = (id) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/friends/${id}.json`,
    })
      .done((thisWillBeNull) => {
        resolve(thisWillBeNull);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const getAllFriendsPendOrAcc = () => {
  return new Promise((resolve, reject) => {
    const allFriendsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/friends.json`,
    })
      .done((allFriendsObj) => {
        if (allFriendsObj !== null) {
          Object.keys(allFriendsObj).forEach((key) => {
            allFriendsArray.push(allFriendsObj[key]);
          });
        }
        resolve(allFriendsArray);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const getAllFriendsAccepted = () => {
  return new Promise((resolve, reject) => {
    getUidFirebaseConfig();
    const friendsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/friends.json`, // ?orderBy="friendUid"&equalTo="${uid}"`,
    })
      // .done((allFriendsObj) => {
      //   if (allFriendsObj !== null) {
      //     Object.keys(allFriendsObj).forEach((key) => {
      //       if (uid === allFriendsObj[key].friendUid || uid === allFriendsObj[key].userUid) {
      //         friendsArray.push(allFriendsObj[key]);
      //       }
      //     });
      //   };
      .done((allFriendsObj) => {
        if (allFriendsObj !== null) {
          Object.keys(allFriendsObj).forEach((key) => {
            if (uid === allFriendsObj[key].friendUid || uid === allFriendsObj[key].userUid) {
              if (allFriendsObj[key].isAccepted === true) {
                allFriendsObj[key].id = key;
                friendsArray.push(allFriendsObj[key]);
              }
            }
          });
        };
        resolve(friendsArray);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const getAllFriendsPending = () => {
  return new Promise((resolve, reject) => {
    const pendingFriendsArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/friends.json`,
    })
      .done((allFriendsObj) => {
        if (allFriendsObj !== null) {
          Object.keys(allFriendsObj).forEach((key) => {
            if (allFriendsObj[key].isPending) {
              if (uid === allFriendsObj[key].friendUid || uid === allFriendsObj[key].userUid) {
                allFriendsObj[key].id = key;
                pendingFriendsArray.push(allFriendsObj[key]);
              }
            }
          });
        }
        resolve(pendingFriendsArray);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const getOneUserName = (friendUID) => {
  return new Promise((resolve,reject) => {
    let username = '';
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.apiKeys.firebaseDB.databaseURL}/users.json`,
    })
      .done((allUsersObj) => {
        Object.keys(allUsersObj).forEach((key) => {
          if (friendUID === allUsersObj[key].uid) {
            username = allUsersObj[key].username;
          }
        });
        resolve(username);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  getUidFirebaseConfig,
  getUsers,
  requestAFriend,
  acceptAFriend,
  deleteAFriend,
  getAllFriendsPendOrAcc,
  getAllFriendsAccepted,
  getAllFriendsPending,
  getOneUserName,
};
