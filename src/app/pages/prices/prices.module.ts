import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesRoutingModule } from './prices-routing.module';
import { PricesComponent } from './prices.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { SharedOtherModule } from 'src/app/components/shared-other/shared-other.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PricesComponent
  ],
  imports: [
    CommonModule,
    PricesRoutingModule,
    SharedModule,
    SharedOtherModule,
    CarouselModule.forRoot(),
    HttpClientModule
  ]
})
export class PricesModule { }
