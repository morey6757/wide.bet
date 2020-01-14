import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styles: []
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      'name': '',
      'email': '',
      'password': ''
    });
  }

  get name() { return this.registerForm.get('name') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }

  submit() {
    console.info(this.name.value);
    console.info(this.email.value);
    console.info(this.password.value);
    this.router.navigate(['/app/dashboard']);
  }
}