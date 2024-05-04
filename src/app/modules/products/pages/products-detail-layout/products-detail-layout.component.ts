import { Component } from '@angular/core';
import { CmmEcomProductDetailModelv2 } from 'src/app/common/data/utils/models/ecommerce.models';
import { icons, images } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-detail-layout',
  templateUrl: './products-detail-layout.component.html',
  styleUrls: ['./products-detail-layout.component.scss']
})
export class ProductsDetailLayoutComponent {

  looks = []

  product: CmmEcomProductDetailModelv2 = {
    images: [
      images.product20,
    ],
    mainImage: images.product6,
    name: 'Never split the difference',
    brand: 'Chris Voss',
    price: '175.00',
    quantity: 1,
    aditionalInfo: [
      {
        title: 'sinopsis',
        text: 'El prestigioso ex negociador internacional del FBI Chris Voss, especializado en secuestros con rehenes, nos enseña un método de negociación rompedor: tácticas para negociaciones duras que son aplicables en múltiples aspectos de nuestras vidas.'
      },
      // {
      //   title: 'COLOR',
      //   type: 'variants',
      //   colorVariants: [
      //     {
      //       color: '#fff'
      //     },
      //     {
      //       color: '#000'
      //     },
      //     {
      //       color: '#148954'
      //     }
      //   ]
      // },
      // {
      //   title: 'Tallas',
      //   type: 'variants',
      //   textVariants: [
      //     {
      //       text: 'XS'
      //     },
      //     {
      //       text: 'S'
      //     },
      //     {
      //       text: 'M'
      //     },
      //     {
      //       text: 'L'
      //     },
      //     {
      //       text: 'XL'
      //     },
      //     {
      //       text: 'XXL'
      //     },
      //   ]
      // },
    ],
  }

  promos = []

  items: any[] = []

  smallMode: boolean = false

}
