import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }


  issellerServerLogedIn =  new BehaviorSubject<any>(false);

  getUSerData()
  {
    return this.http.get('http://localhost:3000/users')
  }

  putUSerData(data: any)
  {
    return this.http.put('http://localhost:3000/users',data, {observe:'response'}).subscribe((res: any)=>{
      console.log(res)
    })
  }
}
