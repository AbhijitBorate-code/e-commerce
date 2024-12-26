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
    console.log('user', data);
    return this.http.post('http://localhost:3000/seller',data, {observe : 'response'}).subscribe((res : any)=>{
      console.log('user **********************', res)
      this.issellerServerLogedIn.next(true);
      let data = JSON.stringify(res);
      localStorage.setItem('seller-auth',data)
      console.log(this.issellerServerLogedIn)
      this.router.navigate(['seller-home']);
    });
  }


  getSellerData(){
    return this.http.get('http://localhost:3000/seller');
  }


  getProductDataById(id : any){
    return this.http.get('http://localhost:3000/products/'+id);
  }


  addProduct(data: any) {
    return this.http.post('http://localhost:3000/products', data).subscribe((res: any) => {
        console.log('Product added successfully:', res);
    });
}

  getProductList(){
    return this.http.get('http://localhost:3000/products');
  }

  updateProduct(data : any){
    return this.http.put('http://localhost:3000/products/'+data.id,data).subscribe((res: any)=>{
      console.log('Product updated successfully:', res);
    });
  }

  deleteProduct(id : any){
    return this.http.delete('http://localhost:3000/products/'+id);
  }



  onReload(){
    if(localStorage.getItem('seller-auth') || localStorage.getItem('seller-home')){
      this.issellerServerLogedIn.next(true);
    }
  }
}


