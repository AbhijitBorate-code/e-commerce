import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http : HttpClient, private router : Router) { }
  issellerServerLogedIn =  new BehaviorSubject<any>(false);
  userSignUp(data : any)
  {
    console.log('user logi11111n', data);
    return this.http.post('http://localhost:3000/seller',data, {observe : 'response'}).subscribe((res : any)=>{
      this.issellerServerLogedIn.next(true);
      console.log(this.issellerServerLogedIn)
      this.router.navigate(['seller-home']);
    });
  }
}
