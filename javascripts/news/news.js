let firebaseConfig = {};
let uid = '';

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const setUID = (userID) => {
  uid = userID;
};

const saveNewsArticle = (newArticle) => {
  newArticle.uid = uid;
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/news.json`,
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
  saveNewsArticle,
  setConfig,
  setUID,
};
