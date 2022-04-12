import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';
import { emailValidator } from '../utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator]),
    'password': new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
  }

  loginHandler(): void {
    // this.userService.login$()
  }
}
