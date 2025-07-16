export const state = {
  currentPage: 1,
  lastQuery: 'top-headlines?country=us'
};

export function setCurrentPage(page) {
  state.currentPage = page;
}

export function setLastQuery(query) {
  state.lastQuery = query;
}
