import { fetchNews } from './api.js';
import { displayNews } from './newsRenderer.js';
import { state, setCurrentPage } from './state.js';

export function displayPagination(currentPage, totalResults) {
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const pageInfo = document.getElementById('pageInfo');
  const totalPages = Math.ceil(totalResults / 12); 

  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;

  prevButton.onclick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      fetchNews(state.lastQuery, state.currentPage).then(data => {
        displayNews(data.articles);
        displayPagination(state.currentPage, data.totalResults);
      });
    }
  };

  nextButton.onclick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      fetchNews(state.lastQuery, state.currentPage).then(data => {
        displayNews(data.articles);
        displayPagination(state.currentPage, data.totalResults);
      });
    }
  };
}
