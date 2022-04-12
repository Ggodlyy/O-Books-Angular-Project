import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { emailValidator, passwordMatch } from '../utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(3)]);
  validRepass: boolean = true;

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator]),
    'passwords': new FormGroup({
      'password': this.passwordControl,
      'repass': new FormControl(null, [passwordMatch(this.passwordControl)])
    })
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registerHandler(): void {
    console.log(this.passwordsGroup.controls.password.value)
    console.log(this.passwordsGroup.controls.repass.value)
    if (this.passwordsGroup.controls.password.value !== this.passwordsGroup.controls.repass.value) {
      this.validRepass = false;
      return;
    } else {
      this.validRepass = true;
    }

    const { email, passwords } = this.registerFormGroup.value;

    const body = {
      email: email,
      password: passwords.password
    };

    this.userService.register$(body).subscribe(() => {
      this.router.navigate(['/home']);
    });

  }

}
