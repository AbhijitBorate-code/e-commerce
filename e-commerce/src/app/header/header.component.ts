import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  menuType: any = 'default';
  sellerName : any;

  ngOnInit(): void {
    console.log(
      'Loading................................?...........................  .................'
    );
    this.router.events.subscribe((event: any) => {

      if (event.url) {
        if(event?.url?.includes('/seller-home') || localStorage.getItem("seller-home"))
          {
            this.menuType = 'seller';

            this.sellerName = localStorage.getItem('seller-home');
            console.log('sellerName:', JSON.parse(this.sellerName));
            this.sellerName = JSON.parse(this.sellerName).email

  
            console.log('Seller logged in');
          }
      }
    });

    console.log(
      this.menuType,
      '***********************?*****************************************'
    );
  }


  logoutSeller()
  {
    localStorage.removeItem('seller-home');
    this.router.navigate(['seller-auth']);
    this.menuType = 'default';
  }
}
