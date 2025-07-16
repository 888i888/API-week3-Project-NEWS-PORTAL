import { API_KEY } from './config.js';
const BASE_URL = 'https://newsapi.org/v2';
export const ARTICLES_PER_PAGE = 12;

export async function fetchNews(query = 'top-headlines?country=us', page = 1) {
  try {
    const response = await fetch(`${BASE_URL}/${query}&page=${page}&pageSize=${ARTICLES_PER_PAGE}&apiKey=${API_KEY}`);
    if (!response.ok) throw new Error('Failed to fetch news');
    const data = await response.json();
    return { articles: data.articles, totalResults: data.totalResults };
  } catch (error) {
    console.error('Error fetching news:', error);
    return { articles: [], totalResults: 0 };
  }
}
