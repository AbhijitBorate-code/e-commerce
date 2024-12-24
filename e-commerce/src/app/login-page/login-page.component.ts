import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {


  constructor(private fb : FormBuilder ){}

  login ! :  FormGroup

  ngOnInit(): void {
      this.login = this.fb.group({
        email : [null, [Validators.email, Validators.required]],
        password: [null, [Validators.minLength(5), Validators.required]]
      })
  }


  onSubmit()
  {
    if(this.login.valid)
      {
        console.log(this.login.value);
      }
  }
}
