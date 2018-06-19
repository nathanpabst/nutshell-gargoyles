const addArticleButton = () => {
  let output = '';
  output += `<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#newsModal">Add an article</button>`;
  printToDom(output, '#addArticleButton');
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
                      <input type="text" class="form-control article-title-input"
                      placeholder="Article Title"/>
                  </div>
                  <div class="form-group">
                    <label for="articleSynapsis">Synapsis</label>
                      <input type="text" class="form-control article-synapsis-input"
                      placeholder="Synapsis"/>
                  </div>
                  <div class="form-group">
                        <label for="articleUrl">Article URL</label>
                          <input type="text" class="form-control article-url-input"
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
  printToDom(output, '#modalDiv');
};

const printNews = (articleArray) => {
  let newsOutput = '';
  console.log('array:',articleArray);
  newsOutput += `<h1 class="text-center">News</h1>`;
  articleArray.forEach((article) => {
    newsOutput += `<div class='row'>
                    <div class="col-sm-8">
                      <div class="panel article-container" data-firebase-db-id="${article.id}">
                        <a class="btn deleteArticleButton">X</a>
                        <div class="panel-heading">
                          <h3 class="article-title">${article.title}</h3>
                        </div>
                        <div class="panel-body">
                          <p class="article-synapsis">${article.synapsis}</p>
                          <p><a class="btn btn-default article-url" href="${article.url}" role="button" target="_blank">Read More</a></p>
                        </div>
                      </div>
                    </div>
                  </div>`;
  });
  print(newsOutput);
};

const printToDom = (stringz, whereToPrint) => {
  $(whereToPrint).html(stringz);
};

const print = (newsStringz) => {
  $('#newsContainer').html(newsStringz);
};

module.exports = {
  printModalForm,
  addArticleButton,
  printNews,
};
