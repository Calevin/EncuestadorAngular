import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  public user = this.afAuth.authState.pipe(
    map((authState) => {
      if (authState) {
        return authState;
      } else {
        return null;
      }
    })
  );

  login(){
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(user => {
        //this.authUser = user.user;
        //console.log('this.authUser: ', this.authUser);
      })
      .catch(error => console.log(error));
  }

  logout(){
    this.afAuth.signOut();
  }
}
