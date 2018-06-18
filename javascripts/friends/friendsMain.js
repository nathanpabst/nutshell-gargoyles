const friendsFirebase = require('./friendsFirebase');
const friendsEvents = require('./friendsEvents');
const friendsDom = require('./friendsDom');

const initializer = () => {
  // friendsFirebase.getUidFirebaseConfig();
  friendsFirebase.getAllFriendsAccepted()
    .then((friendsArray) => {
      friendsDom.displayFriends(friendsArray);
    })
    .catch();
  friendsFirebase.getAllFriendsPending()
    .then((pendingFriendsArray) => {
      friendsDom.displayFriendsPending(pendingFriendsArray);
    })
    .catch();
  friendsEvents.addFriendBtnEvent();
  friendsEvents.acceptAFriendBtnEvent();
  friendsEvents.declineAFriendBtnEvent();
  friendsEvents.unFriendBtnEvent();
};

module.exports = {
  initializer,
};
