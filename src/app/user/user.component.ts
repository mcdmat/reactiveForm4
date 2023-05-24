import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../usermodel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {


  userForm = this.fb.group({
    username: ['', Validators.required],
    credentials: this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    }),
    address: this.fb.group({
      street: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
    }),
  });
user: any;
  constructor(private fb: FormBuilder) {}
  
  onSubmit() {
this.user = this.userForm.value;
  }
}
