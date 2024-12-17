import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs';
import { URL_SERVICE } from '../../../config/config';
import {of} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  token:any='';

  constructor(
    //protected http: HttpClient
  ) { }

  loadStorage(){
    if(localStorage.getItem("token"))
    {
      this.token= localStorage.getItem("token");
      this.user = JSON.parse(localStorage.getItem("user") ?? '');
    }
    else{
      this.token = '';
      this.user = null;
    }
  }

  login(obj:any){
    let URL = URL_SERVICE + '/login';
    var body = JSON.stringify(obj);
    console.log(obj);
    if(obj.UserEmail=="admin@gmail.com" && obj.Password=="12345"){
      const res={
        "status": 200,
        "message": "Submitted successfully",
        "data": {
                "UserId": 9,
                "UserName": "Abhishek Tripathi",
                "UserType": "client",
                "UserEmailId": "abhishek@gmail.com",
                "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2ZpcnN0X25hbWUiOiJhdmluYXNoIiwidXNlcl9pZCI6OSwiQnVzaW5lc3NQYXJ0bmVySWQiOjEsImRlYWxlcl9pZCI6bnVsbCwic2hvd3Jvb21faWQiOm51bGwsInVzZXJfdHlwZSI6ImJ1c2luZXNzcGFydG5lciIsImlzX2NoaWxkX2lkIjoiMCIsImlhdCI6MTczNDQ0Njc0MiwiZXhwIjoxNzM0NDg5OTQyfQ.hChnALc7FinjOEjMEYM-WKqpBSAyMZ0H_D8cunwbtFA"
        }
      }
      return this.saveLocalStorageResponse(res.data);
    }
    else{
      return false;
    }


    // return this.http.post(URL,body).pipe(
    //   map((resp:any)=>{
    //     if(resp.access_token){
    //        return this.saveLocalStorageResponse(resp);
    //     }
    //     else{
    //       return resp;
    //     }
    //   }),
    //   catchError((err:any)=>{
    //     return of(err);
    //   })
    //)
  }

  saveLocalStorageResponse(resp:any){
    if(resp.access_token && resp.UserId){
      localStorage.setItem("token", resp.access_token);
      localStorage.setItem("user", JSON.stringify(resp.UserId));
      this.user = resp.UserId;
      this.token = resp.access_token
      return true;

    }
    return false;

  }


  register(data:any){
    // let URL = URL_SERVICE+ '/register';
    // return this.http.post(URL,data);
  }



  logout(){
    this.user=null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    //return this.http.post('/auth/logout', {});

  }



}
