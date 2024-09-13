// web component
class ImageMosaic extends HTMLElement {
    constructor() {
      super();
      this.image1 = '';
      this.image2 = '';
      this.image3 = '';
      this.image4 = '';
      this.clearStyles = false;
      this.image1Styles = '';
      this.image2Styles = '';
      this.image3Styles = '';
      this.image4Styles = '';
    }
    
    // component attributes
    static get observedAttributes() {
      return ['image1', 'image2', 'image3', 'image4', 'clear-styles'];
    }
    
    // attribute change
    attributeChangedCallback(property, oldValue, newValue) {
      if (property === 'clear-styles') {
        this.clearStyles = newValue === 'true';
      } else {
        if (oldValue === newValue) return;
        this[ property ] = newValue;
      }
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
      let customStyles = `
        .image-wrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #fff;
          border-radius: 18px;
          overflow: hidden;
        };
      `;

      console.log(this.clearStyles);

      if (this.clearStyles) {
        customStyles = '';
      }

      let style = `
        .container.image1 {
          background-image: url(${this.image1});
          ` + this.image1Styles + `
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
          ` + this.image1Styles + `
        }

        .container.image2 {
          clip-path: polygon(50% 100%, 50% 0, 100% 0, 100% 100%);
          background-image: url(${this.image2});
          ` + this.image2Styles + `
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
          ` + this.image1Styles + `
        }

        .container.image2 {
          clip-path: polygon(27% 0, 73% 0, 61% 100%, 39% 100%);
          background-image: url(${this.image2});
          ` + this.image2Styles + `
        }

        .container.image3 {
          clip-path: polygon(100% 0, 74% 0, 62% 100%, 100% 100%);
          background-image: url(${this.image3});
          ` + this.image3Styles + `
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
          ` + this.image1Styles + `
        }

        .container.image2 {
          clip-path: polygon(100% 0, 50% 0, 50% 49%, 100% 49%);
          background-image: url(${this.image2});
          ` + this.image2Styles + `
        }

        .container.image3 {
          clip-path: polygon(0 100%, 0 50%, 49% 50%, 49% 100%);
          background-image: url(${this.image3});
          ` + this.image3Styles + `
        }

        .container.image4 {
          clip-path: polygon(100% 100%, 100% 50%, 50% 50%, 50% 100%);
          background-image: url(${this.image4});
          ` + this.image4Styles + `
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
          style +
          customStyles + 
          `
        </style>
      `;
    }

    getUrlParameters() {
      const processUrl = (image) => {
        try {
          const url = new URL(image, window.location.href); // Si es relativa, la mantiene relativa a la ubicación actual
          const params = url.searchParams;
          return {
            url: url.origin + url.pathname,
            styles: params.get('styles') || ''
          };
        } catch (error) {
          // Si falla, simplemente retorna la imagen tal como está
          return { url: image, styles: '' };
        }
      };
    
      // Procesa cada imagen
      if (this.image1) {
        const result1 = processUrl(this.image1);
        this.image1 = result1.url;
        this.image1Styles = result1.styles;
      }
    
      if (this.image2) {
        const result2 = processUrl(this.image2);
        this.image2 = result2.url;
        this.image2Styles = result2.styles;
      }

      if (this.image3) {
        const result3 = processUrl(this.image3);
        this.image3 = result3.url;
        this.image3Styles = result3.styles;
      }

      if (this.image4) {
        const result4 = processUrl(this.image4);
        this.image4 = result4.url;
        this.image4Styles = result4.styles;
      }
    }
  }
  
  // register component
  customElements.define( 'image-mosaic', ImageMosaic );