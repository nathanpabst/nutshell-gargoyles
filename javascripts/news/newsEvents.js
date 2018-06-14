const {saveNewsArticle,} = require('./news');

const saveNewsArticleEvent = () => {
  $(document).on('click', '.addArticle', (e) => {
    const articleToAddCard = $(e.target).closest('.article');
    const articleToAdd = {
      title: articleToAddCard.find('.article-title').text(),
      synapsis: articleToAddCard.find('.article-synapsis').text(),
      url: articleToAddCard.find('.article-url').text(),
    };
    saveNewsArticle.saveNewsArticleEvent(articleToAdd)
      .then(() => {
        alert('article saved');
      })
      .catch((error) => {
        console.error('error in saving article', error);
      });
  });
};

const modalInit = () => {
  $('#myModal').on('shown.bs.modal', () => {
    console.log('from events');
    $('#myInput').focus();
  });
};

module.exports = {
  saveNewsArticleEvent,
  modalInit,
};
