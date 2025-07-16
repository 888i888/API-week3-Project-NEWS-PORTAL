# News Portal
A responsive single-page web application that allows users to browse and search for news articles using the [News API](https://newsapi.org/). Users can select popular news categories or enter custom search queries, and navigate through pages of results with pagination support.

***

## Features

- Browse news by categories: General, Sports, Education, Politics, Business, Technology.
- Search news articles by keywords.
- View article title, description, source, publication date, and thumbnail image.
- Pagination to navigate through multiple pages of news results.
- Responsive and user-friendly interface.
- Footer with links and social media placeholders.

***

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/888i888/API-week3-Project-NEWS-PORTAL.git
   ```
2. Open `index.html` in your browser.

***

## API Key Setup

This project uses the News API. You need to get your own API key:

1. Sign up at [https://newsapi.org/](https://newsapi.org/).
2. Replace the `API_KEY` value in `js/api.js` with your API key.

```js
const API_KEY = 'YOUR_API_KEY_HERE';
```
***

## Project Structure

```
/news-portal
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── api.js        # Handles API requests and data fetching
│   ├── ui.js         # Manages UI rendering of articles and pagination
│   └── main.js       # Contains event listeners and app logic
|   |__ layout.js     # Structure page
├── assets/
│   └── favicon.ico
└── README.md

```
***

## Technologies Used

- HTML
- CSS
- JavaScript
- News API 