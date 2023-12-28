import { Injectable } from "@angular/core";
import {User} from "./user.interface";
import { AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: object;

  constructor(private auth: AngularFireAuth, private router: Router) {
    this.auth.authState.subscribe((user) => {
      this.user = user;
    });
  }


  signupUser(user: User) {
    // firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    //   .then(() => console.log('singed up'))
    //   .catch((error) => console.error(error))
    //   .finally();
  }

  signinUser(user: User) {
    this.auth
      .signInWithEmailAndPassword(
        user.email,
        user.password)
      .then(
        () => {
          this.router.navigate(['/']);
        })
      .catch((error) => console.error(error))
      .finally()
  }

  signOutUser() {
    this.auth.signOut()
  }

  getAuthStatus() {
    return this.user != null
  }

  getUser() {
    return this.user
  }
}
