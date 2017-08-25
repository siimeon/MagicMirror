const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host{
      color: red;
    }
    video {
      background: #222;
      margin: 0 0 20px 0;
      width: 100%;
      margin-bottom: 0px;
    }
  </style>
`;

class MagicMirror extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
    this.setupCamera();
  }

  setupCamera() {
    const video =  document.createElement('video');
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.src = window.URL.createObjectURL(stream);
        video.play();
        video.onloadedmetadata = (e) => {video.play();};
        this.appendChild(video);
      });
    }
  }

}

customElements.define('magic-mirror', MagicMirror);
