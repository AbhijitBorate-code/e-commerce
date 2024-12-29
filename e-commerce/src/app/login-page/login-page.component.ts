import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../common-service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UsersService ,private router : Router) {}

  login!: FormGroup;

  isPassword: any = false;

  ngOnInit(): void {
    this.login = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.minLength(5), Validators.required]],
    });
  }

  onSubmit() {
    if (this.login.valid) {
      this.userService.getUSerData().subscribe((users: any) => {
        console.log(users)
        if (Array.isArray(users)) {
          const matchingUser = users.find(
            (res : any) => res.email === this.login.get('email')?.value
          );
          if (matchingUser) {
            this.isPassword = false; 
            this.userService.isUserLoggedIn.next(true);
            localStorage.setItem('user-login',JSON.stringify(matchingUser));
            console.log('Login Successful')
            localStorage.setItem('userName','user')
            this.router.navigate(['Home']);
          } else {
            this.isPassword = true;
          }
        } 
      });
    } 
    else{
      this.isPassword = true;
    }
  }
}
