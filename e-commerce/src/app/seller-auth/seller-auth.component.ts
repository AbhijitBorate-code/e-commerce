import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {

  sellersignup!: FormGroup; // Correct type declaration

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.sellersignup = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email with validators
      password: ['', [Validators.required, Validators.minLength(6)]], // Password with validators
    });
  }

  onSubmit() {
    if (this.sellersignup.valid) {
      console.log('Form Submitted:', this.sellersignup.value);
    } else {
      console.error('Form is invalid');
    }
  }



}
