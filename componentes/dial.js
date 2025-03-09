class LastDial extends HTMLElement {
  constructor() {
    super();
    console.log("Componente creado");
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
       <style>
        .pagination {
            font-family: Century Gothic, sans-serif;
             display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 80px;
        }
         .page {
            width: 32px;
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .page.active {
            background-color: black;
            color: white;
        }
        .page:hover {
            background-color: rgb(226, 226, 226);
            color: black;
        }
    </style>
    <div class="pagination">
        <div class="page active">1</div>
        <div class="page">2</div>
        <div class="page">3</div>
        <div class="page">4</div>
        <div class="page">5</div>
        <div class="page">6</div>
        <div class="page">7</div>
        <div class="page">8</div>
        <div class="page">9</div>
        <div class="page">10</div>
    </div>

      `;
  }

  connectedCallback() {
    console.log("Componente conectado");
  }
}

export default LastDial;
