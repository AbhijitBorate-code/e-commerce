import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }


  userSignUp(data : any)
  {

    console.log('user login', data);
    return this.http.post('http://localhost:3000/seller',data);
  }
}
