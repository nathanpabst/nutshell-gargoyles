const {getFirebaseConfigObj,getUID,} = require('../firebaseAPI');

const saveEvent = (newEvent) => {
  newEvent.uid = getUID;
  console.log(newEvent);
  return new Promise ((resolve, reject) => {
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

module.exports = {
  saveEvent,
};
