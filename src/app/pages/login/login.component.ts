import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: any;
  public data: any;

  constructor(public fb: FormBuilder,
              public request: RequestService) { }

  ngOnInit(): void {
    this.isLogined();

    this.form = this.fb.group({
      email: '',
      password: ''
    })
  }

  isLogined() {
    if (localStorage.getItem('token')) {
      location.replace('admin');
    }
  }
  
  save() {
    let value = {
      "email": `${this.form.value.email}`,
      "password": `${this.form.value.password}`
    }
    console.log(this.form.value);
    
    this.request.postData('https://reqres.in/api/login', this.form.value).subscribe((res) => {
      // console.log(res.token);
      this.data = res;
      localStorage.setItem('token', this.data.token);
      this.isLogined()
    }) 
  }



}
