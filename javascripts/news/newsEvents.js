const {saveNewsArticle,} = require('./news');

const saveNewsArticleEvent = () => {
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
    console.log('from newsEvents', articleToAdd);
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
  $('#newsModal').on('shown.bs.modal', () => {
    $('#myInput').focus();
  });
};

module.exports = {
  saveNewsArticleEvent,
  modalInit,
};
