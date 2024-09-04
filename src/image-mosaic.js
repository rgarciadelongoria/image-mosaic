// web component
class ImageMosaic extends HTMLElement {
  
    constructor() {
      super();
      this.image1 = '';
      this.image2 = '';
      this.image3 = '';
    }
    
    // component attributes
    static get observedAttributes() {
      return ['image1', 'image2', 'image3'];
    }
    
    // attribute change
    attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[ property ] = newValue;
    }
    
    // connect component
    connectedCallback() {
      const shadow = this.attachShadow({ mode: 'closed' });

      const url1 = new URL(this.image1);
      const paramsUrl1 = url1.searchParams;
      const backgroundPositionXUrl1 = paramsUrl1.get('backgroundPositionX') || 'center';
      const backgroundPositionYUrl1 = paramsUrl1.get('backgroundPositionY') || 'center';
  
      const url2 = new URL(this.image2);
      const paramsUrl2 = url1.searchParams;
      const backgroundPositionXUrl2 = paramsUrl1.get('backgroundPositionX') || 'center';
      const backgroundPositionYUrl2 = paramsUrl1.get('backgroundPositionY') || 'center';
  
      const url3 = new URL(this.image3);
      const paramsUrl3 = url1.searchParams;
      const backgroundPositionXUrl3 = paramsUrl1.get('backgroundPositionX') || 'center';
      const backgroundPositionYUrl3 = paramsUrl1.get('backgroundPositionY') || 'center';
      
      shadow.innerHTML = `
        <style>
          :host {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
          }

          .container {
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            background-clip: border-box;
            border: 0;
            margin: 0;
            padding: 0;
          }

          .container.image1 {
            clip-path: polygon(0 0, 26% 0, 38% 100%, 0% 100%);
            background-image: url(${this.image1});
            background-position: ${backgroundPositionXUrl1} ${backgroundPositionYUrl1};
          }

          .container.image2 {
            clip-path: polygon(27% 0, 73% 0, 61% 100%, 39% 100%);
            background-image: url(${this.image2});
            background-position: ${backgroundPositionXUrl2} ${backgroundPositionYUrl2};
          }

          .container.image3 {
            clip-path: polygon(100% 0, 74% 0, 62% 100%, 100% 100%);
            background-image: url(${this.image3});
            background-position: ${backgroundPositionXUrl3} ${backgroundPositionYUrl3};
          }

          .triangle-wrapper {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #fff;
            border-radius: 18px;
            overflow: hidden;
          }
        </style>

        <div class="triangle-wrapper">
          <div class="container image1"></div>
          <div class="container image2"></div>
          <div class="container image3"></div>
        </div>
      `; 
    }
  }
  
  // register component
  customElements.define( 'image-mosaic', ImageMosaic );