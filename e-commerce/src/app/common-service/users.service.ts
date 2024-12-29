import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }


   isUserLoggedIn =  new BehaviorSubject<any>(false);


  getUSerData()
  {
    return this.http.get('http://localhost:3000/users')
  }

  
  putUSerData(data: any)
  {
    console.log(data);
    return this.http.post('http://localhost:3000/users',data, {observe:'response'}).subscribe((res: any)=>{

      console.log(res)
    })
  }
}
