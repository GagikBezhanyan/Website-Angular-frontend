import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }

  getData<Type>(url: string) {
    let header = new HttpHeaders({'Accept-language': 'en'});
    return this.http.get<Type>(url, {headers: header})
  }

  putData<Type>(url: string, value: Type) {
    let header = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.put(url, value, {headers: header})
  }

  postData(url: string, value: any) {
    let header = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post(url, value, {headers: header})
  }

  deleteData(url: string) {
    let header = new HttpHeaders({'Accept-language': 'en'});
    return this.http.delete(url, {headers: header})
  }
}
