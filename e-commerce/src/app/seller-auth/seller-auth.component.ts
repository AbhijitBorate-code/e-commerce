import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../seller-service/service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {

  sellersignup!: FormGroup; // Correct type declaration

  constructor(private fb: FormBuilder, private sellerService : ServiceService, private route: Router) {}

  ngOnInit() {
    this.sellersignup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name : ['',[Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]], // Password with validators
    });
  }

  onSubmit() {
    if (this.sellersignup.valid) {
      this.sellerService.userSignUp(this.sellersignup.value);
  }
  }

}
