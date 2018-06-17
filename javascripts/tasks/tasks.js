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

const getSavedTasks = () => {
  return new Promise ((resolve, reject) => {
    const taskArray = [];
    $.ajax({
      method: 'GET' ,
      url: `${getFirebaseConfigObj().apiKeys.firebaseDB.databaseURL}/task.json?`,
    })
      .done((allTasksObj) => {
        if (allTasksObj !== null) {
          Object.keys(allTasksObj).forEach((fbKey) => {
            allTasksObj[fbKey].id = fbKey;
            taskArray.push(allTasksObj[fbKey]);
          });
        }
        resolve(taskArray);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  saveTasks,
  getSavedTasks,
};
