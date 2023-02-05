import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { SharedOtherModule } from 'src/app/components/shared-other/shared-other.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule,
    SharedOtherModule,
    HttpClientModule
  ]
})
export class GalleryModule { }
