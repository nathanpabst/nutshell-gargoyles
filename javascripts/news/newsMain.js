const {modalInit, saveNewsEvent, getNewsEvent,} = require('./newsEvents');
const {addArticleButton, printModalForm,} = require('./newsDom');

const initializeNews = () => {
  addArticleButton();
  printModalForm();
  modalInit();
  saveNewsEvent();
  getNewsEvent();
};

module.exports = {
  initializeNews,
};
