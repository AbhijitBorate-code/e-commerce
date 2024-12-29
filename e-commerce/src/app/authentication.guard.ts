import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ServiceService } from './common-service/service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private sellerService: ServiceService) {}
  canActivate(): boolean {
    const isAuthenticated = this.sellerService.issellerServerLogedIn.getValue(); // Example method from ServiceService
    console.log(isAuthenticated,'isAuthenticated')
    if (!isAuthenticated) {
      return false;
    }
    return true;
  }
}
