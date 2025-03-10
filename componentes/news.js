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
      const response = await fetch('../data/news.json');
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
          font-family: Arial, sans-serif;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 15px;
          max-width: 500px;
          background: white;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          margin-bottom: 10px;
        }
        .news-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .news-card {
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
        }
        .category {
          font-size: 12px;
          color: #777;
        }
        .title {
          font-size: 18px;
          font-weight: bold;
          margin: 5px 0;
        }
        .description {
          font-size: 14px;
          color: #555;
          margin: 5px 0;
        }
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }
        .authors {
          font-size: 12px;
          color: #777;
        }
        .date {
          font-size: 12px;
          color: #777;
        }
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





