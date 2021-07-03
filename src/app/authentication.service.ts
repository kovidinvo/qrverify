import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  authenticated = new Subject<boolean>()
  
  constructor(private fbAuth:AngularFireAuth) { 
    fbAuth.user.subscribe( user => this.authenticated.next(user?.uid!==null) )
  }

  logOut() {
    this.fbAuth.signOut()
  }

}
