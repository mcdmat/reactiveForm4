import { Component } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../password-validator';
import { emailValidator } from '../email-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {


  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    credentials: this.fb.group({
    email: ['', [Validators.required, emailValidator]],
    password: ['', [Validators.required, passwordValidator]],
    }),
    address: this.fb.group({
      street: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
    }),
  });
user: any;
  constructor(private fb: FormBuilder, ) {}
  
  onSubmit() {
this.user = this.userForm.value;
  }
}
