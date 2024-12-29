import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../common-service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'] // Ensure the correct property name is `styleUrls`
})
export class SellerHomeComponent implements OnInit {
  constructor(private sellerService: ServiceService, private router : Router) {}

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

  deleteItem(e: any)  {


    this.sellerService.deleteProduct(e.id).subscribe((res : any) => {
      console.log('product deleted successfully');
      this.ngOnInit();
    });
  }
}
