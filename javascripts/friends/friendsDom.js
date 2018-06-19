const friendsFirebase = require('./friendsFirebase');
const {getUID,} = require('../firebaseAPI');

const outputDiv = $('#all-users-div');

const printToDom = (string) => {
  outputDiv.html(string);
};

const allUsersDom = (allUsersArray) => {
  let domString = '';
  domString +=  `<div class="list-group">`;
  allUsersArray.forEach((user) => {
    domString +=  `<div class="friend-option">`;
    domString +=    `<a href="#" class="list-group-item" data-uid="${user.uid}" data-username="${user.username}">User: ${user.username}
                      <button class="addThisFriend">Add Friend</button>
                    </a>`;
    domString +=  `</div>`;
  });
  domString +=  `</div>`;
  printToDom(domString);
};

const displayFriends = (friendsArray) => {
  const uid = getUID();
  let domString = '';
  let identifier = '';
  friendsArray.forEach((friend) => {
    // const friendUsername = friendsFirebase.getOneUserName(friend.friendUid);
    if (uid === friend.userUid) {
      friendsFirebase.getOneUserName(friend.friendUid)
        .then((username) => {
          identifier = username;
          domString +=  `<div class="acceptedFriend" data-id="${friend.id}">`;
          domString +=    `<p>${identifier}</p>`;
          domString +=    `<button class="btn btn-default unFriendBtn">Un-Friend</button>`;
          domString +=  `</div>`;
          printFriendsToDom(domString);
        })
        .catch((error) => {
          console.error('cannot access username', error);
        });
    } else if (uid === friend.friendUid) {
      friendsFirebase.getOneUserName(friend.userUid)
        .then((username) => {
          identifier = username;
          domString +=  `<div class="acceptedFriend" data-id="${friend.id}">`;
          domString +=    `<p>${identifier}</p>`;
          domString +=    `<button class="btn btn-default unFriendBtn">Un-Friend</button>`;
          domString +=  `</div>`;
          printFriendsToDom(domString);
        })
        .catch((error) => {
          console.error('cannot access username', error);
        });
    }
  });
};

const printFriendsToDom = (string) => {
  $('#your-friends').html(string);
};

const displayFriendsPending = (pendingFriendsArray) => {
  const uid = getUID();
  let domString = '';
  let identifier = '';
  pendingFriendsArray.forEach((friend) => {
    // const friendUsername = friendsFirebase.getOneUserName(friend.friendUid);
    if (uid === friend.friendUid) {
      friendsFirebase.getOneUserName(friend.userUid)
        .then((username) => {
          identifier = username;
          domString +=  `<div class="friendRequest" data-user-uid="${friend.userUid}" data-friend-uid="${friend.friendUid}" data-id="${friend.id}">`;
          domString +=    `<p>${identifier}</p>`;
          domString +=    `<button class="btn btn-default acceptFriend">Accept</button>`;
          domString +=    `<button class="btn btn-default declineFriend">Decline</button>`;
          domString +=  `</div>`;
          printPendingFriendsToDom(domString);
        });
    } else if (uid === friend.userUid) {
      friendsFirebase.getOneUserName(friend.friendUid)
        .then((username) => {
          identifier = username;
          domString +=  `<div class="">`;
          domString +=    `<p>${identifier}</p>`;
          domString +=    `<p>Waiting for friend to accept</p>`;
          domString +=  `</div>`;
          printPendingFriendsToDom(domString);
        });
    }
  });
};

const printPendingFriendsToDom = (string) => {
  $('#pending-friends').html(string);
};

const displayFriendsPendingLandingPage = (pendingFriendsArray) => {
  const uid = getUID();
  let domString = '<h2><u>Friend Requests</u></h2>';
  let identifier = '';
  pendingFriendsArray.forEach((friend) => {
    // const friendUsername = friendsFirebase.getOneUserName(friend.friendUid);
    if (uid === friend.friendUid) {
      friendsFirebase.getOneUserName(friend.userUid)
        .then((username) => {
          identifier = username;
          domString +=  `<div class="friendRequest" data-user-uid="${friend.userUid}" data-friend-uid="${friend.friendUid}" data-id="${friend.id}">`;
          domString +=    `<p>${identifier}</p>`;
          domString +=    `<button class="btn btn-default acceptFriend">Accept</button>`;
          domString +=    `<button class="btn btn-default declineFriend">Decline</button>`;
          domString +=  `</div>`;
          printPendingFriendsToLandingPage(domString);
        });
    } else if (uid === friend.userUid) {
      friendsFirebase.getOneUserName(friend.friendUid)
        .then((username) => {
          identifier = username;
          domString +=  `<div class="">`;
          domString +=    `<p>${identifier}</p>`;
          domString +=    `<p>Waiting for friend to accept</p>`;
          domString +=  `</div>`;
          printPendingFriendsToLandingPage(domString);
        });
    }
  });
};

const printPendingFriendsToLandingPage = (string) => {
  $('#landing-page-pending-friends').html(string);
};

module.exports = {
  allUsersDom,
  displayFriends,
  displayFriendsPending,
  displayFriendsPendingLandingPage,
};
