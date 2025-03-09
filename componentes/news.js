class NewsCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });}
    connectedCallback() {
      this.render(); }
    render() {
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
            display: flex;
            align-items: center;
            gap: 5px;
          }
          .authors img {
            width: 24px;
            height: 24px;
            border-radius: 50%;
          }
          .date {
            font-size: 12px;
            color: #777;
          }
        </style>
        <div class="category">Engineering</div>
        <div class="title">The future of AI in software engineering</div>
        <div class="description">Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software...</div>
        <div class="footer">
          <div class="authors">
            <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="Author 1">
            <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="Author 2">
            <span>Remy Sharp, Travis Howard</span>
          </div>
          <div class="date">July 14, 2021</div>
        </div>
      `;
    }
  }
  
  customElements.define("news-card", NewsCard);