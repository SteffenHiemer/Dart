import { Component } from '@angular/core';
import { HttpService } from "./http.service";
import {AuthService} from "../../shared/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  myForm: FormGroup;
  loggedIn: boolean = false;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    public authService: AuthService) {}

  onSignin() {
    this.authService.signinUser(this.myForm.value)
  }

  onSignOut() {
    this.authService.signOutUser()
  }

  ngOnInit(): any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required]
    })
  }

  register(username: string, email: string, password: string) {
    this.httpService.sendUser({username, email, password})
      .subscribe(
        data => console.log(data),
        error => console.error(error),
        () => console.log("complete")
      )
  }

  getAuthStatus() {
    return this.authService.getAuthStatus()
  }

  getUser() {
    console.log(this.authService.getUser())
    return this.authService.getUser();
  }
}
