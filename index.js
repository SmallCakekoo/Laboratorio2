import NavBar from "./componentes/nav-bar.js";
import MainHeader from "./componentes/header.js";
import CardMedium from "./componentes/cards/card-medium.js";
import CardSmall from "./componentes/cards/card-small.js";
import CardLarge from "./componentes/cards/card-large.js";
import CardContainer from "./componentes/card-container.js";

customElements.define("nav-bar", NavBar);
customElements.define("main-header", MainHeader);
customElements.define("card-medium", CardMedium);
customElements.define("card-small", CardSmall);
customElements.define("card-large", CardLarge);
customElements.define("card-container", CardContainer);
