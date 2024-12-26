import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../seller-service/service.service';
import { UsersService } from '../seller-service/users.service';


@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrl: './signup-user.component.css'
})
export class SignupUserComponent {
  constructor(private fb: FormBuilder, private sellerService: ServiceService, private userService : UsersService) {}

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
        this.userService.putUSerData(this.login?.value)
      }
  }
  
}
