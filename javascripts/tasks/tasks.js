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
  const uid = getUID();
  const taskArray = [];
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'GET' ,
      url: `${getFirebaseConfigObj().apiKeys.firebaseDB.databaseURL}/task.json?orderBy="uid"&equalTo="${uid}"`,
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

const deleteTask = (taskId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${getFirebaseConfigObj().apiKeys.firebaseDB.databaseURL}/task/${taskId}.json`,
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
  saveTasks,
  getSavedTasks,
  deleteTask,
};
