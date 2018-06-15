const {modalInit, saveNewsArticleEvent,} = require('./newsEvents');
const {addArticleButton, printModalForm,} = require('./newsDom');

const initializeNews = () => {
  addArticleButton();
  printModalForm();
  modalInit();
  saveNewsArticleEvent();
};

module.exports = {
  initializeNews,
};
