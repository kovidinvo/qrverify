import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qrverify';  

  constructor(private fbAuth:AngularFireAuth,public route: ActivatedRoute) {
    
  }
 
  ngOnInit() {
    this.fbAuth

  }
}
