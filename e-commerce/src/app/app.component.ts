import { Component, OnInit } from '@angular/core';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { ServiceService } from './seller-service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  title = 'e-commerce';

  constructor(private sellerAuth : ServiceService){}

  ngOnInit(){
      this.sellerAuth.onReload();
  }

}
