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
  gap: 0.3125rem; 
  padding: 1.25rem; 
  justify-content: center;
  align-items: center;
  margin: auto;
}

.top-row {
  display: flex;
  gap: 1.25rem; 
  justify-content: center;
  width: 100%;
}

.bottom-row {
  display: flex;
  gap: 0.0625rem;
  justify-content: center;
  width: 100%;
}

.small-cards {
  display: flex;
  flex-direction: column;
  gap: 0.625rem; 
}

@media (max-width: 50rem) {
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
    
</div>

      `;
  }
}
