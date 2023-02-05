import { Component, OnInit } from '@angular/core';
import { WoodModel, Woods } from 'src/app/models/data-model';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-wood-types',
  templateUrl: './wood-types.component.html',
  styleUrls: ['./wood-types.component.css']
})
export class WoodTypesComponent implements OnInit {
  private url: string = environment.wood.get;
  public data: WoodModel[] = [];
  public category: Woods[] = [];

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((res: any) => {
      this.data = res;
      this.category = this.data[0].categories;
      // console.log(this.data);
      // console.log(this.category);
    })
  }

}
