customElements.define('custom-element',
  class extends HTMLElement {
    constructor (props) {
      super(props);
      const divEl = window.document.createElement('div');
      divEl.innerText = this.getAttribute('content');

      // required:
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(divEl);
    }
  }
);
