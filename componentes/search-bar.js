class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.setAttribute('class', 'search-bar');

        container.innerHTML = `
            <input type="text" placeholder="Search..." />
            <button class="search-btn">🔍</button>
            <button class="rss-btn">📡</button>
        `;

        const style = document.createElement('style');
        style.textContent = `
            .search-bar {
                display: flex;
                align-items: center;
                gap: 8px;
                border: 1px solid #ccc;
                padding: 6px;
                border-radius: 8px;
                background: #fff;
                width: 20%;
            }
            input {
                border: none;
                outline: none;
                padding: 6px;
                width: 150px;
            }
            button {
                background: none;
                border: none;
                cursor: pointer;
                font-size: 16px;
            }
            button:hover {
                opacity: 0.7;
            }
        `;

        this.shadowRoot.append(style, container,);
    }
}

customElements.define('search-bar', SearchBar);
