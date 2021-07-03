import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';



import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authenticated=false
  isCollapsed = true
  userPhone=""
  userCode=""
  codeSent:boolean=false
  verifier : firebase.default.auth.RecaptchaVerifier | undefined
  confirmationResult : any;

  constructor(private fbAuth:AngularFireAuth,private authService:AuthenticationService) { 
      
  }

  ngOnInit(): void {

  }

  login_start() {
    this.verifier = new firebase.default.auth.RecaptchaVerifier('btnSendCode',{
      'size': 'invisible',
      'callback': (result:any) => {console.log(result);this.login()}
    })
  }

  login() {

    this.fbAuth.signInWithPhoneNumber(this.userPhone,this.verifier!!).then( confirmationResult => {
      this.confirmationResult = confirmationResult
      this.codeSent=true
    }
    ).catch((e:any) => {console.log("err1");console.log(e)})
  }

  finishLogin() {
    this.confirmationResult.code("G"+this.userCode).then((result:any) => {
      console.log(result)
    }).catch((e:any) => console.log(e))
  }

  

}
