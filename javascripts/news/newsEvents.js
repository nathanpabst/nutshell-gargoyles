const news = require('./news');
const newsDom = require('./newsDom');

const getNewsEvent = () => {
  news.getNews()
    .then((articleArray) => {
      newsDom.printNews(articleArray);
    })
    .catch((error) => {
      console.error('error in finding news', error);
    });
};

const saveNewsEvent = () => {
  $(document).on('click', '.saveButton', (e) => {
    e.preventDefault();
    const articleInput = $('.article-title').val();
    const synapsisInput = $('.article-synapsis').val();
    const urlInput = $('.article-url').val();
    const articleToAdd = {
      title: articleInput,
      synapsis: synapsisInput,
      url: urlInput,
    };
    news.saveNewsToDb(articleToAdd)
      .then(() => {
        alert('article saved');
      })
      .catch((error) => {
        console.error('error in saving article', error);
      });
  });
};

const modalInit = () => {
  $('#newsModal').on('shown.bs.modal', () => {
    $('#myInput').focus();
  });
};

module.exports = {
  saveNewsEvent,
  getNewsEvent,
  modalInit,
};
