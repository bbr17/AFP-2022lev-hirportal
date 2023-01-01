import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.initFormGroup();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  initFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  login(): void {
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe();
  }
}
