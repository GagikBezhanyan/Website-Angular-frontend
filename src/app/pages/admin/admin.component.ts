import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/service/request.service';
import { url } from 'src/environments/environment';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private url: string = url;
  public pathName: string = '';
  public form: any;
  public data: any[] = [];
  public mydata: any[] = [];
  public lock: any[] = [];
  public modalRef?: BsModalRef;

  public list: any[] = [
    {
      id: 1,
      path: "/admin/menu",
      text: "Menu"
    },
    {
      id: 2,
      path: "/admin/solid_block",
      text: "Solid wood products"
    },
    {
      id: 3,
      path: "/admin/wood_work",
      text: "The wood we work with"
    },
    {
      id: 4,
      path: "/admin/slider",
      text: "Our work"
    },
    {
      id: 5,
      path: "/admin/advantages",
      text: "Advantages working with us"
    },
    {
      id: 6,
      path: "/admin/about_us",
      text: "About us"
    },
    {
      id: 7,
      path: "/admin/any_questions",
      text: "Any questions?"
    },
    {
      id: 8,
      path: "/admin/price_list",
      text: "Price list"
    },
    {
      id: 9,
      path: "/admin/contact",
      text: "Contact us"
    },
    {
      id: 10,
      path: "/admin/page404",
      text: "404"
    },
    {
      id: 11,
      path: "/admin/footer",
      text: "Footer"
    }
  ]

  constructor(public request: RequestService,
              public fb: FormBuilder, 
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      image: 'hi',
      // icon: '',
      // title: '',
      // subtitle: '',
      // text: '',
      // btn_text: '',
      // path: ''      

      // first_name: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]{1,}$/)])],
      // last_name: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]{1,}$/)])],
      // email: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9_\-\.\$]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/)])],
      // age: ['', Validators.compose([Validators.required, Validators.min(18), Validators.max(64)])],
      // adress: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9\-\/\.\ ]{1,}$/)])],
      // gender: ['', Validators.required],
      // country: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z\-\ ]{1,}$/)])],
      // city: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z\-\ ]{1,}$/)])]
    })
    console.log(this.form);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getData(index: number) {
    this.pathName = this.list[index].path.split('/')[2];
    this.request.getData(`${this.url}/${this.pathName}`).subscribe((res: any) => {
      this.data = res;
      console.log(this.data[0]);
      for (let key in this.data[0]) {
        if (typeof this.data[0][key] === 'object' && this.data[0][key] !== null) {
          this.mydata = this.data[0][key];
          console.log(this.mydata);
        }
      }
      for (let key in this.mydata) {
        if (typeof this.mydata[key] === 'object' && this.mydata[key] !== null) {
          this.lock = this.mydata[key];
          console.log(this.lock);
        }
      }
      
    })
  }


  addData () {


  }
  editData(index: number) {

  }

  deleteData(index: number) {

  }

  sendChanges() {

  }

  save() {
    
  }


}
