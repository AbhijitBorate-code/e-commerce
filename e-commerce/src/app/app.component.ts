import { Component, OnInit } from '@angular/core';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { ServiceService } from './common-service/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  title = 'e-commerce';

  constructor(private sellerAuth : ServiceService , private router : Router , private activateRoute : ActivatedRoute){}


  isSeller : boolean = false;

  ngOnInit(){
      this.sellerAuth.onReload();
      
  }

}
