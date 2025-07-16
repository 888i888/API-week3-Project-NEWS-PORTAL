function displayNews(articles) {
  const newsContainer = document.getElementById('newsContainer');
  newsContainer.innerHTML = ''; 

  if (articles.length === 0) {
    newsContainer.innerHTML = '<p class="no-news">No news found.</p>';
    return;
  }

  articles.forEach((article, index) => {
    const articleElement = document.createElement('article');
    articleElement.className = 'article-card';
    articleElement.style.animationDelay = `${index * 0.1}s`;
    articleElement.innerHTML = `
      ${article.urlToImage ? `<img src="${article.urlToImage}" alt="${article.title}" class="article-image">` : ''}
      <div class="article-content">
        <h2 class="article-title">${article.title}</h2>
        <p class="article-description">${article.description || 'No description available.'}</p>
        <a href="${article.url}" target="_blank" class="article-link">Read more</a>
      </div>
    `;
    newsContainer.appendChild(articleElement);
  });
}

function displayPagination(currentPage, totalResults) {
  const paginationContainer = document.getElementById('pagination');
  const pageInfo = document.getElementById('pageInfo');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const totalPages = Math.ceil(totalResults / ARTICLES_PER_PAGE);

  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;

  prevButton.onclick = () => {
    if (currentPage > 1) {
      window.currentPage = currentPage - 1;
      const query = window.lastQuery || 'top-headlines?country=us';
      fetchNews(query, window.currentPage).then(data => {
        displayNews(data.articles);
        displayPagination(window.currentPage, data.totalResults);
      });
    }
  };

  nextButton.onclick = () => {
    if (currentPage < totalPages) {
      window.currentPage = currentPage + 1;
      const query = window.lastQuery || 'top-headlines?country=us';
      fetchNews(query, window.currentPage).then(data => {
        displayNews(data.articles);
        displayPagination(window.currentPage, data.totalResults);
      });
    }
  };
}
