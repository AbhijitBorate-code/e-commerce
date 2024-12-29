import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../common-service/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private userService : UsersService) {}

  menuType: any = 'default';
  sellerName: any;
  userName: any;

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      console.log(event.url);
      if (event.url) {
        if (
          event?.url?.includes('/seller-home') ||
          localStorage.getItem('seller-home')
        ) {
          this.menuType = 'seller';

          this.sellerName = localStorage.getItem('seller-home');
          this.sellerName = JSON?.parse(this.sellerName)?.email;
        } else if (
          event?.url?.includes('/Home') ||
          localStorage.getItem('user-login')
        ) {
          this.menuType = 'user';
          this.userName = localStorage.getItem('user-login');
          this.userService.isUserLoggedIn.next(true);
          this.userName = JSON.parse(this.userName)?.name;
        }
      }
    });
  }

  logoutSeller() {
    localStorage.removeItem('seller-home');
    this.router.navigate(['seller-auth']);
    this.menuType = 'default';
  }

  logoutUser() {
    localStorage.removeItem('user-login');
    this.router.navigate(['login']);
    this.menuType = 'default';
  }
}
