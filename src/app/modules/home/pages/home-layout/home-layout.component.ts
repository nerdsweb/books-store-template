import { Component, HostListener } from '@angular/core';
import { logoShape } from 'src/app/common/assets/images/images-routes';
import { images, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {

  images = images

  logos = logos

  logosBanner = [
    // logos.mango,
    // logos.channel,
    // logos.dior,
  ]

  outstandingProducts = [
    // this.images.t_shirt,
    // this.images.tall_shoe,
    // this.images.white_shoe,
  ]

  /**
   * Productos del carrusel
   */
  carouselProducts: any[] = [
    {
      "image": "assets/images/products/white_shoe.png",
      "name": "SNEAKERS MARCA",
      "price": "158",
      "variants": [
        "#D7D3D2",
        "#000",
        "#E5B8A3"
      ]
    },
    {
      "image": "assets/images/products/tall_shoe.png",
      "name": "SANDALIAS MARCA",
      "price": "200",
      "variants": [
        "#E5B8A3",
        "#000"
      ]
    },
    {
      "image": "assets/images/products/t-shirt.png",
      "name": "CAMISETA MARCA",
      "price": "158",
      "variants": [
        "#fff",
        "#000",
        "#148954",
        "#0C1284",
        "#A46D09"
      ]
    },
    {
      "image": "assets/images/products/jean.png",
      "name": "JEANS MARCA",
      "price": "158",
      "variants": [
        "#356281",
        "#6F9FC5",
        "#000"
      ]
    },
    {
      "image": "assets/images/products/purse.png",
      "name": "CARTERA ALTAS",
      "price": "200",
      "variants": [
        "#000"
      ]
    },
    {
      "image": "assets/images/products/cap.png",
      "name": "GORRA MARCA",
      "price": "200",
      "variants": [
        "#D7D3D2",
        "#000",
        "#074459"
      ]
    },
    {
      "image": "assets/images/products/tall_shoe.png",
      "name": "SANDALIAS MARCA",
      "price": "200",
      "variants": [
        "#E5B8A3",
        "#000"
      ]
    },
    {
      "image": "assets/images/products/white_shoe.png",
      "name": "SNEAKERS MARCA",
      "price": "158",
      "variants": [
        "#D7D3D2",
        "#000",
        "#E5B8A3"
      ]
    },
    {
      "image": "assets/images/products/t-shirt.png",
      "name": "CAMISETA MARCA",
      "price": "158",
      "variants": [
        "#fff",
        "#000",
        "#148954",
        "#0C1284",
        "#A46D09"
      ]
    }
  ]


}
