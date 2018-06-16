const {getUID, getFirebaseConfigObj,} = require ('../firebaseAPI');

const saveTasks = (newTask) => {
  newTask.uid = getUID();
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${getFirebaseConfigObj().apiKeys.firebaseDB.databaseURL}/task.json`,
      data: JSON.stringify(newTask),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  saveTasks,
};
