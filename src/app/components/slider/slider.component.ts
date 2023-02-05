import { Component, OnInit } from '@angular/core';
import { SliderModel } from 'src/app/models/data-model';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  private url = environment.slider.get;
  public data: SliderModel[] = [];
  public arr: string[] = [];

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((res: any) => {
      this.data = res;
      this.data[0].images.forEach((item, i) => {
        this.arr[i] = item.image
      })
      // console.log(this.data);
      // console.log(this.arr);
    })
  }

}
