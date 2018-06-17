const { getFirebaseConfigObj, getUID, } = require('../firebaseAPI');

// let firebaseConfig = {};
// let uid = {};

// const getFireBaseConfig = () => {
//   firebaseConfig = getFirebaseConfigObj();
//   uid =  getUID();
// };

const saveToFireBase = (newEvent) => {
  newEvent.uid = getUID();
  console.log(newEvent);
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${getFirebaseConfigObj().apiKeys.firebaseDB.databaseURL}/events.json`,
      data: JSON.stringify(newEvent),
    })
      .done((uniqueArray) => {
        resolve(uniqueArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getEvent = () => {
  const allEventArray = [];
  return new Promise((resolve, reject) => {
    // getFireBaseConfig();
    $.ajax({
      method: 'GET',
      url: `${getFirebaseConfigObj().apiKeys.firebaseDB.databaseURL}/events.json?orderBy="uid"&equalTo="${getUID()}"`,
    })
      .done((allEventObj) => {
        if (allEventObj !== null) {
          Object.keys(allEventObj).forEach((fbKey) => {
            allEventObj[fbKey].id = fbKey;
            allEventArray.push(allEventObj[fbKey]);
          });
        }
        resolve(allEventArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const updateEventFb = (updatedEvent, eventsId) => {
  updateEventFb.uid = getUID();
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'PUT',
      url: `${getFirebaseConfigObj().apiKeys.firebaseDB.databaseURL}/events/${eventsId}.json`,
      data: JSON.stringify(updatedEvent),
    })
      .done((modifiedEvent) => {
        resolve(modifiedEvent);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const deleteEventFromDb = (eventId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${getFirebaseConfigObj().apiKeys.firebaseDB.databaseURL}/events/${eventId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  // getFireBaseConfig,
  saveToFireBase,
  getEvent,
  updateEventFb,
  deleteEventFromDb,
};
