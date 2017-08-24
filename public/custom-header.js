const customHeaderTemplate = document.createElement('template');
customHeaderTemplate.innerHTML = `
  <style>
    :host{
      
    }
    div {
      background-color: #FF5722;
      padding-top: 15px;
      padding-bottom: 15px;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    }
    h1 {
      font-family: 'Roboto', sans-serif;
      font-size: 30px;
      margin-left: 30px;
      margin-top: 0px;
      margin-bottom: 0px;
      color: white;
    }
  </style>
  <div>
    <h1>Magic Mirror</h1>
  </div>
`;

class CustomHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(customHeaderTemplate.content.cloneNode(true));
  }

}

customElements.define('custom-header', CustomHeader);
