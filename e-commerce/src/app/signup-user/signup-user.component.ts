import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../common-service/service.service';
import { UsersService } from '../common-service/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrl: './signup-user.component.css'
})
export class SignupUserComponent {
  constructor(private fb: FormBuilder, private sellerService: ServiceService, private userService : UsersService, private router : Router) {}

  login!: FormGroup;

  isPassword: any;

  ngOnInit(): void {
    this.login = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.minLength(5), Validators.required]],
      name : [null, [Validators.required]]
    });
  }

  onSubmit() {
    if(this.login?.valid)
      {
        this.userService.putUSerData(this.login?.value);
        this.userService.isUserLoggedIn.next(true);
        localStorage.setItem('user-login',JSON.stringify(this.login.value));
        console.log('Login Successful')
        localStorage.setItem('userName','user')
        this.router.navigate(['Home']);
           
      }
  }
  
}
