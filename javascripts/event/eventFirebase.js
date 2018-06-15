const firebaseAPI = require('../firebaseAPI');

const saveEvent = (newEvent) => {
  newEvent.uid = firebaseAPI.setUID;
  console.log(newEvent);
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseAPI.getFirebaseConfig.firebaseDB.databaseURL}/events.json`,
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
