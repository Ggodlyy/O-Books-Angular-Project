import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, emailValidator]),
    'passwords': new FormGroup({
      'password': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'repass': new FormControl('')
    })
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  registerHandler(): void {
    console.log(this.registerFormGroup);
  }

}
