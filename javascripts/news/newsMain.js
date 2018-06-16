const {modalInit, saveNewsEvent,} = require('./newsEvents');
const {addArticleButton, printModalForm,} = require('./newsDom');

const initializeNews = () => {
  addArticleButton();
  printModalForm();
  modalInit();
  saveNewsEvent();
};

module.exports = {
  initializeNews,
};
