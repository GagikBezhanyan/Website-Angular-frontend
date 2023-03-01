import { Component, OnInit } from '@angular/core';
import { ContactModel, Icon } from 'src/app/models/data-model';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private url = environment.contact.get;
  public data: ContactModel[] = [];
  public list: Icon[] = [];

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    this.request.getData<ContactModel[]>(this.url).subscribe((res: ContactModel[]) => {
      this.data = res;
      console.log(res[0].icons);
      
      this.list = this.data[0].icons;
    })
  }
}
