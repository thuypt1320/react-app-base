if (!customElements.get('custom_count')) {
  customElements.define('custom_count', class extends HTMLElement {
    constructor (props) {
      super(props);
      const divEl = window.document.createElement('div');
      divEl.setAttribute('style', 'border: 1px solid black; height: 100px; width: 100px;');

      // required:
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(divEl);
    }
  });
}
