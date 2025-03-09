export default class CardContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("Componente creado");
    this.shadowRoot.innerHTML = `
        <style>
       .grid-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: auto;
}

.top-row {
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
}

.bottom-row {
  display: flex;
  gap: 1px;
  justify-content: center;
  width: 100%;
}

.small-cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


/* Ajustes responsivos */
@media (max-width: 800px) {
  .top-row,
  .bottom-row {
    flex-direction: column;
  }
}

        </style>
        <div class="grid-container">
  <div class="top-row">
    <card-large></card-large>
    <card-large></card-large>
  </div>
  <div class="bottom-row">
    <card-medium></card-medium>
    <div class="small-cards">
      <card-small></card-small>
      <card-small></card-small>
    </div>
    <card-medium></card-medium>
  </div>
    <last-dial></last-dial>
    
</div>

      `;
  }
}
