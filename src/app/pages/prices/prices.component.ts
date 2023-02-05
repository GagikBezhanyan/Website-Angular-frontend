import { Component, OnInit } from '@angular/core';
import { PriceModel } from 'src/app/models/data-model';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  private url = environment.priceList.get;
  public data: PriceModel[] = [];
  public arr: string[] = [];

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((res: any) => {
      this.data = res;
      this.data[0].slider.forEach((item: any, i: number) => {
        this.arr[i] = item.image
      }) 
      // console.log(this.arr);
    })
  }

}
