customElements.define('template-slot', class extends HTMLElement {
  constructor () {
    super();
    const templateElm = document.getElementById('template');

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateElm.content.cloneNode(true));
  }
});
