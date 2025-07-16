import { createLayout } from './layout.js';
import { fetchNews } from './api.js';
import { displayNews } from './newsRenderer.js';
import { displayPagination } from './pagination.js';
import { attachEventListeners } from './events.js';
import { initScrollHeader } from './scrollHandler.js';
import { state, setCurrentPage, setLastQuery } from './state.js';

document.addEventListener('DOMContentLoaded', () => {
  createLayout();

  const header = document.getElementById('header');
  initScrollHeader(header);
  attachEventListeners();

  fetchNews(state.lastQuery, state.currentPage).then(data => {
    displayNews(data.articles);
    displayPagination(state.currentPage, data.totalResults);
  });
});
