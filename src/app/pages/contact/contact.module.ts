import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact.component';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class ContactModule { }
