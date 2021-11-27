import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit{

  constructor( private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore, ) {}

  ngOnInit(): void {

  }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      console.log('this is the value', value.user?.displayName);
      // this.afAuth.onAuthStateChanged(response => {
      //   if (response) {
      //     // logged in or user exists
      //     response.updateProfile({
      //       displayName: 'Luis Velito',
      //       photoURL: "https://example.com/jane-q-user/profile.jpg"
      //     });
      //     console.log('updated data: ',this.afAuth.currentUser.then(user => {
      //       console.log(user?.displayName);
      //     }))
      //   }
      //   else {
      //     // not logged in
      //     console.log('this is the not user weeeiiii');
      //   }
      // })
      // this.router.navigateByUrl('/articles');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  };

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  // updateUser(): void {
  //   if(this.user =! null) {
  //     updateProfile(this.user, {
  //       displayName: "Luis Velito", photoURL: "https://example.com/jane-q-user/profile.jpg"
  //     }).then(() => {
  //       // Profile updated!
  //       // ...
  //       console.log('the profile and user');
  //     }).catch((error) => {
  //       // An error occurred
  //       // ...
  //     });
  //   }
  // }

  
}
