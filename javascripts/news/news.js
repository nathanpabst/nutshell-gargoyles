const {getUID, getFirebaseConfigObj,} = require('../firebaseAPI');

const saveNewsToDb = (newArticle) => {
  newArticle.uid = getUID();
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${getFirebaseConfigObj().apiKeys.firebaseDB.databaseURL}/news.json`,
      data: JSON.stringify(newArticle),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  saveNewsToDb,
};
