export default class NewsCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    await this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch('./data/cards.json');
      const newsData = await response.json();
      this.render(newsData.articles);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  }

  render(articles = []) {
    this.shadowRoot.innerHTML = `
      <style>
:host {
  display: block;
  font-family: 'Inter', sans-serif;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
}

.news-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31.25rem, 1fr)); 
}

.news-card {
  background: white;
  padding: 1.5625rem; 
  border-radius: 0.625rem; 
  display: flex;
  flex-direction: column;
}

.category {
  font-size: 0.8125rem; 
  color: #777;
}

.title {
  font-size: 1.1875rem;
  font-weight: bold;
  margin: 0.625rem 0;
}

.description {
  font-size: 0.875rem;
  color: #555;
  margin: 0.3125rem 0;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.625rem; 
  font-size: 0.75rem;
  color: #777;

      </style>
      <div class="news-container">
        ${articles.map(article => `
          <div class="news-card">
            <div class="category">${article.category || 'Unknown'}</div>
            <div class="title">${article.title || 'No title available'}</div>
            <div class="description">${article.description || 'No description available'}</div>
            <div class="footer">
              <div class="authors">${article.authors || 'Unknown author'}</div>
              <div class="date">${article.date || 'Unknown date'}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}
