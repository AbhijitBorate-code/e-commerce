import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }


  cartItimeList =  new BehaviorSubject<any>([]);



  getCartProductList(): Observable<any> {
    return this.http.get('http://localhost:3000/cart');
  }

  getDeleteProductList(id: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/cart/${id}`);
  }

  addProductToCart(product: any): Observable<any> {
  return this.http.post('http://localhost:3000/cart', product);
  }
  
  
  
}
