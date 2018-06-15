// const {setConfig,} = require('../firebaseAPI');

let firebaseConfig = {};
let uid = '';

const setConfig = (fbcConfig) => {
  firebaseConfig = fbcConfig;
};

const setUID = (newUID) => {
  uid = newUID;
};

const saveEvent = (newEvent) => {
  newEvent.uid = uid;
  console.log(newEvent);
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/events.json`,
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
  setConfig,
  setUID,
  saveEvent,
};
