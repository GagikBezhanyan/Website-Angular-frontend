import { Component, OnInit } from '@angular/core';
import { QuestionModel } from 'src/app/models/data-model';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {
  private url = environment.page404.get;
  public data: QuestionModel[] = [];
  public image404!: string; 
  public btn!: string;

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((res: any) => {
      this.data = res;
      this.image404 = this.data[0].image;  
      this.btn = this.data[0].btn_text; 
      // console.log(this.data);
    })
  }

}
