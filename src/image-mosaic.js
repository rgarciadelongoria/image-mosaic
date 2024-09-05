// web component
class ImageMosaic extends HTMLElement {
    constructor() {
      super();
      this.image1 = '';
      this.image2 = '';
      this.image3 = '';
      this.image4 = '';
      this.backgroundPositionXUrl1 = 'center';
      this.backgroundPositionYUrl1 = 'center';
      this.backgroundPositionXUrl2 = 'center';
      this.backgroundPositionYUrl2 = 'center';
      this.backgroundPositionXUrl3 = 'center';
      this.backgroundPositionYUrl3 = 'center';
    }
    
    // component attributes
    static get observedAttributes() {
      return ['image1', 'image2', 'image3', 'image4', 'gap'];
    }
    
    // attribute change
    attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[ property ] = newValue;
    }
    
    // connect component
    connectedCallback() {
      const shadow = this.attachShadow({ mode: 'closed' });

      this.getUrlParameters();

      const style = this.getStyle();
      
      shadow.innerHTML = style + `
        <div class="image-wrapper">
          <div class="container image1"></div>
          <div class="container image2"></div>
          <div class="container image3"></div>
          <div class="container image4"></div>
        </div>
      `; 
    }

    getStyle() {
      let style = `
        .container.image1 {
          background-image: url(${this.image1});
          background-position: ${this.backgroundPositionXUrl1} ${this.backgroundPositionYUrl1};
        }

        .container.image2 {
          display: none;
        }

        .container.image3 {
          display: none;
        }

        .container.image4 {
          display: none;
        }
      `;

      if (this.image1 && this.image2) {
        style = `
        .container.image1 {
          clip-path: polygon(49% 100%, 49% 0, 0 0, 0 100%);
          background-image: url(${this.image1});
          background-position: ${this.backgroundPositionXUrl1} ${this.backgroundPositionYUrl1};
        }

        .container.image2 {
          clip-path: polygon(50% 100%, 50% 0, 100% 0, 100% 100%);
          background-image: url(${this.image2});
          background-position: ${this.backgroundPositionXUrl2} ${this.backgroundPositionYUrl2};
        }

        .container.image3 {
          display: none;
        }

        .container.image4 {
          display: none;
        }
      `;
      }

      if (this.image1 && this.image2 && this.image3) {
        style = `
        .container.image1 {
          clip-path: polygon(0 0, 26% 0, 38% 100%, 0% 100%);
          background-image: url(${this.image1});
          background-position: ${this.backgroundPositionXUrl1} ${this.backgroundPositionYUrl1};
        }

        .container.image2 {
          clip-path: polygon(27% 0, 73% 0, 61% 100%, 39% 100%);
          background-image: url(${this.image2});
          background-position: ${this.backgroundPositionXUrl2} ${this.backgroundPositionYUrl2};
        }

        .container.image3 {
          clip-path: polygon(100% 0, 74% 0, 62% 100%, 100% 100%);
          background-image: url(${this.image3});
          background-position: ${this.backgroundPositionXUrl3} ${this.backgroundPositionYUrl3};
        }

        .container.image4 {
          display: none;
        }
      `;
      }

      if (this.image1 && this.image2 && this.image3 && this.image4) {
        style = `
        .container.image1 {
          clip-path: polygon(0 0, 49% 0, 49% 49%, 0 49%);
          background-image: url(${this.image1});
          background-position: ${this.backgroundPositionXUrl1} ${this.backgroundPositionYUrl1};
        }

        .container.image2 {
          clip-path: polygon(100% 0, 50% 0, 50% 49%, 100% 49%);
          background-image: url(${this.image2});
          background-position: ${this.backgroundPositionXUrl2} ${this.backgroundPositionYUrl2};
        }

        .container.image3 {
          clip-path: polygon(0 100%, 0 50%, 49% 50%, 49% 100%);
          background-image: url(${this.image3});
          background-position: ${this.backgroundPositionXUrl3} ${this.backgroundPositionYUrl3};
        }

        .container.image4 {
          clip-path: polygon(100% 100%, 100% 50%, 50% 50%, 50% 100%);
          background-image: url(${this.image4});
          background-position: ${this.backgroundPositionXUrl4} ${this.backgroundPositionYUrl4};
        }
      `;
      }
      
      return `
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
          ` +
          style + `
          .image-wrapper {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #fff;
            border-radius: 18px;
            overflow: hidden;
          }
        </style>
      `;
    }

    getUrlParameters() {
      try {
        const url1 = new URL(this.image1);
        const paramsUrl1 = url1.searchParams;
        this.backgroundPositionXUrl1 = paramsUrl1.get('backgroundPositionX') || 'center';
        this.backgroundPositionYUrl1 = paramsUrl1.get('backgroundPositionY') || 'center';
      } catch (error) {}
  
      try {
        const url2 = new URL(this.image2);
        const paramsUrl2 = url2.searchParams;
        this.backgroundPositionXUrl2 = paramsUrl2.get('backgroundPositionX') || 'center';
        this.backgroundPositionYUrl2 = paramsUrl2.get('backgroundPositionY') || 'center';
      } catch (error) {}
  
      try {
        const url3 = new URL(this.image3);
        const paramsUrl3 = url3.searchParams;
        this.backgroundPositionXUrl3 = paramsUrl3.get('backgroundPositionX') || 'center';
        this.backgroundPositionYUrl3 = paramsUrl3.get('backgroundPositionY') || 'center';
      } catch (error) {}
  
      try {
        const url4 = new URL(this.image4);
        const paramsUrl4 = url4.searchParams;
        this.backgroundPositionXUrl4 = paramsUrl4.get('backgroundPositionX') || 'center';
        this.backgroundPositionYUrl4 = paramsUrl4.get('backgroundPositionY') || 'center';
      } catch (error) {}
    }
  }
  
  // register component
  customElements.define( 'image-mosaic', ImageMosaic );