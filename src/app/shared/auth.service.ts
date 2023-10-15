import { Injectable } from "@angular/core";
import {User} from "./user.interface";
import { AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: object;

  constructor(private auth: AngularFireAuth) {
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
        (data) => console.log(data))
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
