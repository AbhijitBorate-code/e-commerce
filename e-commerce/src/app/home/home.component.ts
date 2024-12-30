import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../common-service/service.service';
import { Router } from '@angular/router';
import { UsersService } from '../common-service/users.service';
import { ProductService } from '../common-service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private sellerService: ServiceService, private router : Router, private productService : ProductService) {}

  sellerData: any[] = []; 

  ngOnInit() {
    this.sellerService.getProductList().subscribe(
      (seller: any) => {
        if (Array.isArray(seller)) {
          this.sellerData = seller;
        } else if (seller) {
          this.sellerData.push(seller); 
        }
      }
    );
  }
  editItem(e: any) {
    console.log(e)

    this.router.navigate(['add-product-list'], { queryParams: { id: e.id } });
  } 

  addToCart(e: any)  {
    if(localStorage.getItem('user-login')){
      this.productService.addProductToCart(e).subscribe((res: any)=>{
        console.log(res);
      })
    }
    else{
      alert("Please login to add product to cart")
    }
      
  }
}
