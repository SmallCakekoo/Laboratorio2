class CardMedium extends HTMLElement {
  constructor() {
    super();
    console.log("Componente creado");
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      
.card-medium {
  width: 370px; 
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: Century Gothic, sans-serif;
  margin: 15px;
  display: flex;
  flex-direction: column;
}

.card img {
 width: 100%; 
  height: 180px;
  object-fit: cover; 

}

.card-content {
  padding: 15px;
}

.category {
  font-size: 12px;
  color: gray;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
}

.description {
  font-size: 14px;
  color: gray;
  padding-bottom: 25px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding: 20px 15px;
}

.author {
  display: flex;
  align-items: center;
  font-size: 12px;
}

.author img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
}

.date {
  font-size: 12px;
  color: gray;
}
      </style>

      <div class="card-medium">
      <img src="https://placehold.co/300x200" alt="Imagen de la noticia" />
      <div class="card-content">
        <p class="category">Design</p>
        <p class="title">Designing for the future: trends and insights</p>
        <p class="description">
          Stay ahead of the curve with the latest design trends and insights. Our design team shares their...
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

export default CardMedium;
