import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CmmModule } from 'src/app/common/common.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CmmModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
