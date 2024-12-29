import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from './common-service/users.service';
@Injectable({
  providedIn: 'root',
})
export class UserAuthGuard implements CanActivate {
  constructor(private router: Router, private userService : UsersService) {}
  canActivate(): boolean {
    const isAuthenticated = this.userService.isUserLoggedIn.getValue();
    console.log(isAuthenticated)
    console.log(isAuthenticated,'isAuthenticated')
    if (!isAuthenticated) {
      return false;
    }
    return true;
  }
}
