import { Component, OnInit } from '@angular/core';
import { AboutModel, Image } from 'src/app/models/data-model';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.css']
})
export class AboutInfoComponent implements OnInit {
  private url: string = environment.aboutUs.get;
  public data: AboutModel[] = [];
  public list: Image[] = [];
  public style: any = {};

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((res: any) => {
      this.data = res;
      this.list = this.data[0].images;
      this.list.forEach((item: any, i: number) => {
        this.style[item.id] = 
          {
            backgroundImage: `url('../../../${item.image}')`
          }
      });
      // console.log(this.list);
      // console.log(this.style);
    })
  }

}
