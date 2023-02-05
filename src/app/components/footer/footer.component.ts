import { Component, OnInit } from '@angular/core';
import { FooterModel, Icon } from 'src/app/models/data-model';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private url = environment.footer.get;
  public data: FooterModel[] = [];
  public list: Icon[] = [];
  public logo!: string;
  public isShow: boolean = false;

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((res: any) => {
      this.data = res;
      this.logo = this.data[0].icon;
      this.list = this.data[0].icons;
      // console.log(this.data);
    })
  }
  show(): void {
    this.isShow = !this.isShow
  }

}
