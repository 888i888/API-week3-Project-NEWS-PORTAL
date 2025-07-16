import { fetchNews } from './api.js';
import { displayNews } from './newsRenderer.js';
import { displayPagination } from './pagination.js';
import { state, setCurrentPage, setLastQuery } from './state.js';

export function attachEventListeners() {
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');
  const navButtons = document.querySelectorAll('.nav-button');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.dataset.category;
      setCurrentPage(1);
      setLastQuery(category === 'general' ? 'top-headlines?country=us' : `everything?q=${category}`);

      fetchNews(state.lastQuery, state.currentPage).then(data => {
        displayNews(data.articles);
        displayPagination(state.currentPage, data.totalResults);
      });

      searchInput.value = '';
    });
  });

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    setCurrentPage(1);

    const currentCategory = document.querySelector('.nav-button.active').dataset.category;
    setLastQuery(query ? `everything?q=${encodeURIComponent(query)}` : (currentCategory === 'general' ? 'top-headlines?country=us' : `everything?q=${currentCategory}`));

    fetchNews(state.lastQuery, state.currentPage).then(data => {
      displayNews(data.articles);
      displayPagination(state.currentPage, data.totalResults);
    });
  });

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchButton.click();
    }
  });
}
