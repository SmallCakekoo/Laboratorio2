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
          max-width : 65%;
          margin: 0 auto;
        }
        .news-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 50px;
        }
        .news-card {
          background: white;
          padding: 25px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
        }
        .category {
          font-size: 13px;
          color: #777;
        }
        .title {
          font-size: 19px;
          font-weight: bold;
          margin: 10px 0;
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
          font-size: 12px;
          color: #777;
        }
        .authors {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .authors img {
          width: 28px;
          height: 28px;
          border-radius: 50%;
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
