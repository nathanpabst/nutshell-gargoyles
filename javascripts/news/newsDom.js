const addArticleButton = () => {
  let output = '';
  output += `<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#newsModal">Add an article</button>`;
  printToDom(output);
};

const printModalForm = () => {
  let output = '';
  output += `<div class="modal fade" id="newsModal" tabindex="-1" role="dialog" aria-labelledby="newsModalLabel">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="newsModalLabel">NEWS:</h4>
                  </div>
                  <div class="modal-body article">
                  <form role="form">
                  <div class="form-group">
                    <label for="articleTitle">Article Title</label>
                      <input type="text" class="form-control article-title"
                      placeholder="Article Title"/>
                  </div>
                  <div class="form-group">
                    <label for="articleSynapsis">Synapsis</label>
                      <input type="text" class="form-control article-synapsis"
                      placeholder="Synapsis"/>
                  </div>
                  <div class="form-group">
                        <label for="articleUrl">Article URL</label>
                          <input type="text" class="form-control article-url"
                          placeholder="Article URL"/>
                    </div>
                </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary saveButton">Save Article</button>
                  </div>
                </div>
              </div>
            </div>`;
  printToDom(output);
};

const printNews = (articleArray) => {
  let newsOutput = '';
  newsOutput += `<h1 class="text-center">News</h1>`;
  articleArray.forEach((article) => {
    newsOutput += `<div class="row">
                    <div class="col-sm-6 col-md-4">
                      <a class="btn deleteArticle">X</a>
                      <h3 class="text-center article-title">${article.title}</h3>
                      <h3 class="text-center article-synapsis">${article.synapsis}</h3>
                      <a class="article-url" href="${article.url}"></a>
                    </div>
                  </div>`;
  });
  printToDom(newsOutput);
};

const printToDom = (stringz) => {
  $('#news-page').append(stringz);
};

module.exports = {
  printModalForm,
  addArticleButton,
  printNews,
};
