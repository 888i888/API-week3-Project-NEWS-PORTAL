document.addEventListener("DOMContentLoaded", () => {
  const createEl = (tag, className, textContent) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (textContent) el.textContent = textContent;
    return el;
  };

  const fullPanel = createEl("div", "full-panel");

  const container = createEl("div", "container");

  //header
  const header = createEl("header");
  header.id = "header";

  const h1 = createEl("h1", null, "News Portal");
  header.appendChild(h1);

  const nav = createEl("nav", "nav-bar");
  const categories = ["general", "sports", "education", "politics", "business", "technology"];
  categories.forEach((cat, index) => {
    const btn = createEl("button", "nav-button", cat.charAt(0).toUpperCase() + cat.slice(1));
    btn.dataset.category = cat;
    if (index === 0) btn.classList.add("active");
    nav.appendChild(btn);
  });

  header.appendChild(nav);

  const searchContainer = createEl("div", "search-container");
  const searchInput = createEl("input");
  searchInput.type = "text";
  searchInput.id = "searchInput";
  searchInput.placeholder = "Search news...";

  const searchButton = createEl("button", null, "Search");
  searchButton.id = "searchButton";

  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);
  header.appendChild(searchContainer);

  //main content
  const main = createEl("main");
  main.id = "newsContainer";

  const pagination = createEl("div", "pagination");
  pagination.id = "pagination";

  const prevBtn = createEl("button", "pagination-button", "Previous");
  prevBtn.id = "prevButton";

  const pageInfo = createEl("span");
  pageInfo.id = "pageInfo";

  const nextBtn = createEl("button", "pagination-button", "Next");
  nextBtn.id = "nextButton";

  pagination.appendChild(prevBtn);
  pagination.appendChild(pageInfo);
  pagination.appendChild(nextBtn);

  // Append to container
  container.appendChild(header);
  container.appendChild(main);
  container.appendChild(pagination);

  //footer
  const footer = createEl("footer");
  const footerContent = createEl("div", "footer-content");

  const copyright = createEl("p", null, "© 2025 News Portal. All rights reserved.");

  const footerLinks = createEl("ul", "footer-links");
  ["About", "Contact", "Privacy Policy"].forEach((text) => {
    const li = createEl("li");
    const a = createEl("a", null, text);
    a.href = `#${text.toLowerCase().replace(" ", "")}`;
    li.appendChild(a);
    footerLinks.appendChild(li);
  });

  const footerSocial = createEl("ul", "footer-social");
  ["Twitter", "Facebook", "Instagram"].forEach((text) => {
    const li = createEl("li");
    const a = createEl("a", null, text);
    a.href = `#${text.toLowerCase()}`;
    li.appendChild(a);
    footerSocial.appendChild(li);
  });

  footerContent.appendChild(copyright);
  footerContent.appendChild(footerLinks);
  footerContent.appendChild(footerSocial);
  footer.appendChild(footerContent);

  // Append everything to body
  fullPanel.appendChild(container);
  fullPanel.appendChild(footer);
  document.body.appendChild(fullPanel);
});
