import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';



import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit, AfterViewInit {

  authenticated=false
  isCollapsed = true
  userPhone=""
  userCode=""
  codeSent:boolean=false
  verifier : firebase.auth.RecaptchaVerifier | undefined
  confirmationResult : any;
  windowRef : any

  constructor(private fbAuth:AngularFireAuth,private cd: ChangeDetectorRef) { 
      fbAuth.user.subscribe( user => {this.authenticated = user?.uid!=null;cd.detectChanges()})
      this.windowRef=window
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {

  }

  login_start() {
    console.log("recaptcha init")
    const self = this
    this.windowRef.verifier = new firebase.auth.RecaptchaVerifier('recaptcha-div',{
      'size': 'normal',
      'callback': (result:any) => {console.log(result);self.login()},
      'expired-callback': () => console.log("catptcha expired")
    })
    this.windowRef.verifier.render()
  }

  login() {
    const self = this
    this.fbAuth.signInWithPhoneNumber(this.userPhone,this.windowRef.verifier).then(confResult => self.processCodeSent(confResult)).catch((e:any) => {console.log("err1");console.log(e)})
  }

  private processCodeSent(confirmationResult:any) {
    this.confirmationResult = confirmationResult
    this.codeSent=true
    this.cd.detectChanges()
  }

  finishLogin() {
    this.confirmationResult.confirm(this.userCode.toString()).then((result:any) => {
      console.log(result)
    }).catch((e:any) => console.log(e))
  }

  logout() {
    this.fbAuth.signOut()
  }

}
