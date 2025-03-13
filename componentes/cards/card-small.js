class CardSmall extends HTMLElement {
  constructor() {
    super();
    console.log("Componente creado");
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
.card-small {
  width: 24rem;
  height: 15.3rem;
  margin-top:1rem;
  background: white;
  border-radius: 0.625rem;
  box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: Century Gothic, sans-serif;
  display: flex;
  flex-direction: column;
}

.card-small img {
  width: 100%;
  height: 9.375rem;
  object-fit: cover;
}

.card-content {
  padding: 0.9375rem;
}

.category {
  font-size: 0.75rem;
  color: gray;
}

.title {
  font-size: 1.125rem;
  font-weight: bold;
  margin: 0.3125rem 0;
}

.description {
  font-size: 0.875rem;
  color: gray;
  padding-bottom: 1.5625rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.0625rem solid #eee;
  padding: 1.25rem 0.9375rem;
}

.author {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
}

.author img {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  margin-right: 0.3125rem;
}

.date {
  font-size: 0.75rem;
  color: gray;
}

      </style>

      <div class="card-small">
      <div class="card-content">
        <p class="category">Design</p>
        <p class="title">Designing for the future: trends and insights</p>
        <p class="description">
          Learn about our commitment to sustainability and the innovative engineering solutions we're...
        </p>
      </div>
      <div class="card-footer">
        <div class="authors"></div>
        <span class="date">July 14, 2021</span>
      </div>
    </div>
      

      `;
  }

  connectedCallback() {
    console.log("Componente conectado");
  }
}

export default CardSmall;
