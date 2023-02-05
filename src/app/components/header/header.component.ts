import { Component, OnInit } from '@angular/core';
import { ListModel, MenuModel } from 'src/app/models/data-model';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private url = environment.menu.get;
  public data: MenuModel[] = [];
  public list: ListModel[] = [];
  public logo!:string;

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((res: any) => {
      this.data = res;
      this.logo = this.data[0].icon;
      this.list = this.data[0].menuList;
      // console.log(this.data);
      // console.log(this.logo);
      // console.log(this.list);
    });

  }

}
