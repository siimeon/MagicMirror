const template = document.createElement('template');
template.innerHTML = `
  <h1>Hello world</h1>
  <style>
    :host{
      color: red;
    }
  </style>
`;

class MagicMirror extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

}

customElements.define('magic-mirror', MagicMirror);
