import { Component, OnInit } from '@angular/core';
import { ProductService } from '../common-service/product.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css',
})
export class AddToCartComponent implements OnInit {
  constructor(private productList: ProductService) {}
  cartItems: any = [];
  totalPrice: any;

  ngOnInit(): void {
    this.productList.getCartProductList().subscribe((res: any) => {
      localStorage.setItem('productCount', res.length.toString());
      this.cartItems = res;
      let priceDetails = this.cartItems.reduce((acc: number, item: any) => {
        return acc + parseInt(item.price || 0);
      }, 0);

      this.totalPrice = priceDetails;
    });
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.productList.getDeleteProductList(item.id).subscribe((response) => {
        console.log('Product deleted:', response);
      });

      this.cartItems.splice(index, 1);
    }
  }
}
