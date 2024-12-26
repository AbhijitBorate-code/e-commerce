import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../seller-service/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UsersService ) {}

  login!: FormGroup;

  isPassword: any;

  ngOnInit(): void {
    this.login = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.minLength(5), Validators.required]],
      name : [null , [Validators.required]]
    });
  }

  onSubmit() {
    if (!this.login.valid) {
      this.userService.getUSerData().subscribe((users: any) => {
        console.log(users)
        if (Array.isArray(users)) {
          const matchingUser = users.find(
            (res : any) => res.email === this.login.get('email')?.value
          );

          console.log(matchingUser)
  
          if (matchingUser) {
            this.isPassword = true; 
            console.log('Email found, user exists');
          } else {
            this.isPassword = false;
            console.log('Email not found');
          }
        } else {
          console.error('Response is not an array:', users);
        }
      });
    } else {
      console.warn('Form is invalid!');
    }
  }
}
