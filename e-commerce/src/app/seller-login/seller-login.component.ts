import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../seller-service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrl: './seller-login.component.css'
})
export class SellerLoginComponent {
  constructor(private fb: FormBuilder, private sellerService: ServiceService, private router : Router) {}

  login!: FormGroup;

  isPassword: any;

  ngOnInit(): void {
    this.login = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.minLength(5), Validators.required]],
    });
  }

  onSubmit() {
    if (this.login.valid) {
      this.sellerService.getSellerData().subscribe((res) => {
        if (Array.isArray(res)) {
          res.forEach((element) => {
            if (
              element.email == this.login.get('email')?.value &&
              element.password == this.login.get('password')?.value
            ) {

              let data = JSON.stringify(this.login.value)
              localStorage.setItem('seller-home', data);
              console.log('success');
              this.isPassword = false;
              this.sellerService.issellerServerLogedIn.next(true);
              this.router.navigate(['seller-home'])
            } else {
              this.isPassword = true;
            }
          });
        } else {
          console.error('Response is not an array:', res);
        }
      });

      console.log(this.login.value);
    }
    else{
      
    }
  }
}
