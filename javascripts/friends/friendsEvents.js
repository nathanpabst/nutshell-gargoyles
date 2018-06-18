const friendsFirebase = require('./friendsFirebase');
const friendsDom = require('./friendsDom');

const addFriendBtnEvent = () => {
  $('#add-friend-btn').click(() => {
    friendsFirebase.getUsers()
      .then((allUsersArray) => {
        friendsDom.allUsersDom(allUsersArray);
        addThisFriendEvent();
      })
      .catch();
  });
};

const addThisFriendEvent = () => {
  $(document).on('click', '.addThisFriend', (e) => {
    const friendUID = $(e.target).closest('.friend-option').find('.list-group-item').data('uid');
    friendsFirebase.requestAFriend(friendUID)
      .then(() => {
        friendsFirebase.getAllFriendsPending()
          .then((pendingFriendsArray) => {
            friendsDom.displayFriendsPending(pendingFriendsArray);
          })
          .catch();
      })
      .catch();
  });
};

const acceptAFriendBtnEvent = () => {
  $(document).on('click', '.acceptFriend', (e) => {
    const userUid = $(e.target).closest('.friendRequest').data('userUid');
    const friendUid = $(e.target).closest('.friendRequest').data('friendUid');
    const idForDB = $(e.target).closest('.friendRequest').data('id');
    const modifiedFriendship = {
      friendUid: friendUid,
      isAccepted: true,
      isPending: false,
      userUid: userUid,
    };
    friendsFirebase.acceptAFriend(modifiedFriendship, idForDB)
      .then(() => {
        friendsFirebase.getAllFriendsAccepted()
          .then((friendsArray) => {
            friendsDom.displayFriends(friendsArray);
          })
          .catch();
        friendsFirebase.getAllFriendsPending()
          .then((pendingFriendsArray) => {
            friendsDom.displayFriendsPending();
          })
          .catch();
      })
      .catch();
  });
};

const declineAFriendBtnEvent = () => {
  $(document).on('click', '.declineFriend', (e) => {
    const idForDB = $(e.target).closest('.friendRequest').data('id');
    friendsFirebase.deleteAFriend(idForDB)
      .then(() => {
        friendsFirebase.getAllFriendsPending()
          .then((pendingFriendsArray) => {
            friendsDom.displayFriendsPending(pendingFriendsArray);
          })
          .catch();
      })
      .catch();
  });
};

const unFriendBtnEvent = () => {
  $(document).on('click', '.unFriendBtn', (e) => {
    const idForDB = $(e.target).closest('.acceptedFriend').data('id');
    friendsFirebase.deleteAFriend(idForDB)
      .then(() => {
        friendsFirebase.getAllFriendsAccepted()
          .then((friendsArray) => {
            friendsDom.displayFriends(friendsArray);
          })
          .catch();
      })
      .catch();
  });
};

module.exports = {
  addFriendBtnEvent,
  acceptAFriendBtnEvent,
  declineAFriendBtnEvent,
  unFriendBtnEvent,
};
