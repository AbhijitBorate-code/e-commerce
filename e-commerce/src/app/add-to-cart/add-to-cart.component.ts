import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
  cartItems : any= [
    {
      "name": "I phone 14",
      "price": "100000",
      "category": "mobile",
      "color": "black",
      "description": "An Apple Product",
      "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOO1JDPUNwcPiqzHYhaL_zpJA0Ymlr6mD9sSgTPad_JYdrk-o",
      "id": "2"
    },
    {
      "name": "HP Laptop",
      "price": "50000",
      "category": "Laptop",
      "color": "black",
      "description": "Hp laptop for student and professionals",
      "image": "https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg",
      "id": "3"
    },
    {
      "name": "Nike Shoes",
      "price": "3000",
      "category": "Shoes",
      "color": "Black",
      "description": "Best shoes for Running",
      "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1eeaacc0-e07c-4024-a5f7-57f2fd23e8a2/air-max-270-g-golf-shoe-Z6vCfs.png",
      "id": "4"
    },
  ]


  removeFromCart(item : any)
  {

  }
}
