import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { AboutInfoComponent } from '../about-info/about-info.component';
import { QuestionsComponent } from '../questions/questions.component';
import { WoodTypesComponent } from '../wood-types/wood-types.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AboutInfoComponent,
    SliderComponent,
    QuestionsComponent,
    WoodTypesComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    HttpClientModule
  ],
  exports: [
    AboutInfoComponent,
    SliderComponent,
    QuestionsComponent,
    WoodTypesComponent
  ]
})
export class SharedOtherModule { }
