import { Component, OnInit } from '@angular/core';
import { QuestionModel } from 'src/app/models/data-model';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  private url = environment.questions.get;
  public data: QuestionModel[] = [];
  public style: any = {};

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData(this.url).subscribe((res: any) => {
      this.data = res;
      this.style.backgroundImage = `url('../../../${this.data[0].image}')`;
      // console.log(this.style);
    })
    
  }

}
