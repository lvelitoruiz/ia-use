import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit{
  public user: any;
  public currentUser: boolean = false;

  constructor( private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore, ) { }

  ngOnInit(): void {
  }

  async login(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      this.currentUser = true;
      this.user = {
        uid: value.user?.uid,
        email: value.user?.email,
        photoURL: value.user?.photoURL,
        displayName: value.user?.displayName
      }
      localStorage.setItem('userData',JSON.stringify(this.user));
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
    this.router.navigate(['/articles']);
  };

  logOut() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  checkUser() {
    this.afAuth.currentUser.then(response => {
      console.log('response: ',response?.displayName);
    });
  }

  
}
