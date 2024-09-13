# image-mosaic

## Install

#### Method 1

```shell
npm i @rgarciadelongoria/image-mosaic
```

#### Method 2

Import file directly from unpkg URL.

https://unpkg.com/@rgarciadelongoria/image-mosaic@0.0.6/src/image-mosaic.js

#### Method 3

You can copy and paste de code from src/image-mosaic.js file.

## Web Component to display a mosaic of images

With this component you can display from 1 to 4 mosaic of images. 
The default appearance of each mosaic depends on the number of images.

### Examples

[jsfiddle DEMO](https://jsfiddle.net/rgarciadelongoria/sqe9jfc3/)

#### 4 pictures:

![Captura de pantalla 2024-09-13 a las 21 35 46](https://github.com/user-attachments/assets/03136920-3196-4ec2-bc68-18782a0b18be)

```html
<image-mosaic
  image1="https://picsum.photos/id/152/400/400"
  image2="https://picsum.photos/id/159/400/400"
  image3="https://picsum.photos/id/175/400/400"
  image4="https://picsum.photos/id/237/400/400">
</image-mosaic>
```

#### 3 pictures:

![Captura de pantalla 2024-09-13 a las 21 36 43](https://github.com/user-attachments/assets/8de3d4c7-811c-44c4-813b-83ff3fc465f0)

```html
<image-mosaic
  image1="https://picsum.photos/id/152/400/400"
  image2="https://picsum.photos/id/159/400/400"
  image3="https://picsum.photos/id/175/400/400">
</image-mosaic>
```

#### 2 pictures:

![Captura de pantalla 2024-09-13 a las 21 37 10](https://github.com/user-attachments/assets/80c89524-3c81-4e23-9776-c2268df4b582)

```html
<image-mosaic
  image1="https://picsum.photos/id/152/400/400"
  image2="https://picsum.photos/id/159/400/400">
</image-mosaic>
```

#### 1 picture:

![Captura de pantalla 2024-09-13 a las 21 37 30](https://github.com/user-attachments/assets/1d7ff0a2-09c4-49e0-a2d3-5d5c9694c93b)

```html
<image-mosaic image1="https://picsum.photos/id/152/400/400"></image-mosaic>
```

#### Custom CSS

![Captura de pantalla 2024-09-13 a las 21 37 54](https://github.com/user-attachments/assets/ba073702-f201-4329-b265-a573c4e36c52)

```html
<image-mosaic class="custom-image-mosaic"
    image1="https://picsum.photos/id/152/400/400?styles=background-position: center -50px;"
    image2="https://picsum.photos/id/159/400/400?styles=background-position: 75px center;"
    image3="https://picsum.photos/id/175/400/400?styles=background-position: 0 -40px;background-size: 60%;"
    image4="https://picsum.photos/id/237/400/400?styles=background-position: 35px 45px;">
</image-mosaic>
```

#### Custom CSS clip-path and **clear-styles** property

![Captura de pantalla 2024-09-13 a las 21 38 16](https://github.com/user-attachments/assets/38917d08-7f4c-4ad6-926d-7fefa67d7dad)

```html
<image-mosaic
    image1="https://picsum.photos/id/152/400/400?styles=clip-path: polygon(0 0, 20% 0, 80% 100%, 0% 100%);"
    image2="https://picsum.photos/id/159/400/400?styles=clip-path: polygon(100% 0, 20% 0, 80% 100%, 100% 100%);"
    image3="https://picsum.photos/id/175/400/400?styles=clip-path: polygon(10% 10%, 10% 90%, 25% 90%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 90%, 90% 90%, 90% 10%);">
</image-mosaic>
```




