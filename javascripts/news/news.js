const {getUID, getFirebaseConfigObj,} = require('../firebaseAPI');

const deleteNewsFromDb = (articleId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${getFirebaseConfigObj().apiKeys.firebaseDB.databaseURL}/news/${articleId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getNews = () => {
  return new Promise((resolve, reject) => {
    const uid = getUID();
    const savedNewsArray = [];
    $.ajax({
      method: 'GET',
      url: `${getFirebaseConfigObj().apiKeys.firebaseDB.databaseURL}/news.json?orderBy="uid"&equalTo="${uid}"`,
    })
      .done((allNewsObj) => {
        if (allNewsObj !== null) {
          Object.keys(allNewsObj).forEach((fbKey) => {
            allNewsObj[fbKey].id = fbKey;
            savedNewsArray.push(allNewsObj[fbKey]);
          });
        }
        resolve(savedNewsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

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
  getNews,
  deleteNewsFromDb,
};
