import { Injectable, inject } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  auth = inject(AngularFireAuth); 
  user$: Observable<firebase.default.User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  signOut() {
    return this.afAuth.signOut();
  }

  signin(user:User){
   return this.afAuth.signInWithEmailAndPassword(user.email, user.password);
  }
}
