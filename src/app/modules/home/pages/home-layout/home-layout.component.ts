import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { logoShape } from 'src/app/common/assets/images/images-routes';
import { CmmEcomProductCardDataModel } from 'src/app/common/data/utils/models/ecommerce.models';
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

  /**
   * Productos de la primera sección
   */
  section1Products: CmmEcomProductCardDataModel[] = [
    {
      image: images.product1,
      title: 'LA TIERRA PRIMETIDA',
      brand: 'BARACK OBAMA',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '1'
    },
    {
      image: images.product2,
      title: 'EL MUNDO COMO YO LO VEO',
      brand: 'ALBERT EINSTEIN',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '2'
    },
    {
      image: images.product1,
      title: 'LA TIERRA PRIMETIDA',
      brand: 'BARACK OBAMA',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '3'
    },
    {
      image: images.product1,
      title: 'LA TIERRA PRIMETIDA',
      brand: 'BARACK OBAMA',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '4'
    },
  ]

  constructor(
    private router: Router
  ) { }

  /**
   * Me lleva a la vista de detalle
   * @param id 
   */
  navigate(id: string) {
    this.router.navigate(['/products/detail'])
  }

}
