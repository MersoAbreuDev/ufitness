import { Injectable, inject } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  auth = inject(AngularFireAuth); 

  //======================Autenticação===============================

  signin(user:User){
   return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }
}
