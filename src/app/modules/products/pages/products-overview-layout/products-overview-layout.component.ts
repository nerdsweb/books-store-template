import { Component } from '@angular/core';
import { images } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-overview-layout',
  templateUrl: './products-overview-layout.component.html',
  styleUrls: ['./products-overview-layout.component.scss']
})
export class ProductsOverviewLayoutComponent {

  productsList: any[] = [
    {
      image: images.product5,
      title: 'PADRE RICO PADRE POBRE',
      brandName: 'Robert T. Kiyosaki',
      sku: 'krogm93746917',
      price: '14,00',
      previousprice: '27,00',
      quantity: 1,
      currency: '$',
      id: '5'
    },
    {
      images: [
        images.product20,
      ],
      image: images.product6,
      name: 'Never split the difference',
      brandName: 'Chris Voss',
      sku: 'krogm93746917',
      price: '175.00',
      quantity: 1,
      aditionalInfo: [
        {
          title: 'sinopsis',
          texts: [
            'El prestigioso ex negociador internacional del FBI Chris Voss, especializado en secuestros con rehenes, nos enseña un método de negociación rompedor: tácticas para negociaciones duras que son aplicables en múltiples aspectos de nuestras vidas.',
          ]
        },
      ],
    },
    {
      image: images.product7,
      title: 'HÁBITOS ATÓMICOS',
      brandName: 'JAMES CLEAR',
      price: '14,00',
      quantity: 1,
      previousprice: '27,00',
      currency: '$',
      id: '7'
    },
  ]

  prebill: any = {
    basePrice: 175,
    delivery: 175,
    totalPrice: 175,
    discount: '_ US$',
    currency: 'US$'
  }

}
