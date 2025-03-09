export default class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: Arial, sans-serif;
          padding: 20px;
          background: #f8f9fa;
          border-top: 1px solid #ddd;
        }
        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        .newsletter {
          max-width: 300px;
        }
        .newsletter h3 {
          margin: 0;
          font-size: 16px;
        }
        .newsletter p {
          font-size: 14px;
          color: #555;
        }
        .email-input {
          display: flex;
          gap: 5px;
          margin-top: 10px;
        }
        .email-input input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .email-input button {
          padding: 8px 12px;
          border: none;
          background: black;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }
        .links {
          display: flex;
          gap: 30px;
        }
        .links div {
          display: flex;
          flex-direction: column;
        }
        .links a {
          text-decoration: none;
          color: #555;
          font-size: 14px;
          margin: 3px 0;
        }
        .social-icons {
          display: flex;
          gap: 10px;
        }
        .social-icons a {
          text-decoration: none;
          font-size: 18px;
        }
      </style>
      <div class="footer-container">
        <div class="newsletter">
          <h3>Join the newsletter</h3>
          <p>Subscribe for weekly updates. No spams ever!</p>
          <div class="email-input">
            <input type="email" placeholder="Your email address">
            <button>Subscribe</button>
          </div>
        </div>
        <div class="links">
          <div>
            <strong>Product</strong>
            <a href="#">Features</a>
            <a href="#">Testimonials</a>
            <a href="#">Highlights</a>
            <a href="#">Pricing</a>
            <a href="#">FAQs</a>
          </div>
          <div>
            <strong>Company</strong>
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div>
            <strong>Legal</strong>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div class="social-icons">
          <a href="#">🔗</a>
          <a href="#">✖</a>
          <a href="#">🔗</a>
        </div>
      </div>
    `;
  }
}

