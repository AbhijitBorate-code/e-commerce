import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../seller-service/service.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'] // Ensure the correct property name is `styleUrls`
})
export class SellerHomeComponent implements OnInit {
  constructor(private sellerService: ServiceService) {}

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
}
