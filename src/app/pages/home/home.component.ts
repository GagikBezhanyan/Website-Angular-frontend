import { Component, OnInit } from '@angular/core';
import { AdvantagesModel, SolidModel, Image, Text } from 'src/app/models/data-model';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private url1: string = environment.solid.get;
  private url2: string = environment.advantages.get;
  public data1: SolidModel[] = [];
  public data2: AdvantagesModel[] = [];
  public list: Image[] = [];
  public style: any = {};
  public texts: Text[] = [];
  public style_img: any = {};

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData(this.url1).subscribe((res: any) => {
      this.data1 = res;
      this.list = this.data1[0].images;
      this.list.forEach((item: any, i: number) => {
        this.style[item.id] = 
          {
            backgroundImage: `url('../../../${item.image}')`
          }
      });
      // console.log(this.data1);
      // console.log(this.list);
      // console.log(this.style);
    }) 

    this.request.getData(this.url2).subscribe((res: any) => {
      this.data2 = res;
      this.texts = this.data2[0].texts;
      this.style_img = {
        backgroundImage: `url(../../../${this.data2[0].image})`
      }
      // console.log(this.data2);
      // console.log(this.texts);
    }) 
  }

}
