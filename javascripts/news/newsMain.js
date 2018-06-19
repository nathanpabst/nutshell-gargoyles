const {modalInit, saveNewsEvent, deleteNewsEvent, getNewsEvent,} = require('./newsEvents');
const {addArticleButton, printModalForm,} = require('./newsDom');

const initializeNews = () => {
  addArticleButton();
  getNewsEvent();
  printModalForm();
  modalInit();
  saveNewsEvent();
  deleteNewsEvent();
};

module.exports = {
  initializeNews,
};
