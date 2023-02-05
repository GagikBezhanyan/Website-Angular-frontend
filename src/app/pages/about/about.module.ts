import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { SharedOtherModule } from 'src/app/components/shared-other/shared-other.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    SharedOtherModule,
    HttpClientModule
  ]
})
export class AboutModule { }
