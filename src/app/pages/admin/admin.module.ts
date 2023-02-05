import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    SharedModule
  ]
})
export class AdminModule { }
