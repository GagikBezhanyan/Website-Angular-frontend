import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page404RoutingModule } from './page404-routing.module';
import { Page404Component } from './page404.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    Page404Component
  ],
  imports: [
    CommonModule,
    Page404RoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class Page404Module { }
