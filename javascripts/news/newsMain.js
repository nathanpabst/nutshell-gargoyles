const {modalInit,} = require('./newsEvents');
const {addArticleButton, printModalForm,} = require('./newsDom');

const initializeNews = () => {
  addArticleButton();
  printModalForm();
  modalInit();
};

module.exports = {
  initializeNews,
};
