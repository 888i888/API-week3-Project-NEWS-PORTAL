document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const navButtons = document.querySelectorAll('.nav-button');
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    // Load general news on page load
    window.currentPage = 1;
    window.lastQuery = 'top-headlines?country=us';
    fetchNews(window.lastQuery, window.currentPage).then(data => {
        displayNews(data.articles);
        displayPagination(window.currentPage, data.totalResults);
    });

    // Handle scroll to hide/show header
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }
        lastScrollY = currentScrollY;
    });

    // Handle category navigation
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            window.currentPage = 1;
            window.lastQuery = category === 'general' ? 'top-headlines?country=us' : `everything?q=${category}`;
            fetchNews(window.lastQuery, window.currentPage).then(data => {
                displayNews(data.articles);
                displayPagination(window.currentPage, data.totalResults);
            });
            searchInput.value = ''; // Clear search input on category change
        });
    });

    // Handle search
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        window.currentPage = 1;
        const currentCategory = document.querySelector('.nav-button.active').getAttribute('data-category');
        window.lastQuery = query ? `everything?q=${encodeURIComponent(query)}` : (currentCategory === 'general' ? 'top-headlines?country=us' : `everything?q=${currentCategory}`);
        fetchNews(window.lastQuery, window.currentPage).then(data => {
            displayNews(data.articles);
            displayPagination(window.currentPage, data.totalResults);
        });
    });

    // Handle enter key for search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});