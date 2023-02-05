import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { SharedOtherModule } from 'src/app/components/shared-other/shared-other.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    SharedOtherModule,
    HttpClientModule
  ]
})
export class HomeModule { }
