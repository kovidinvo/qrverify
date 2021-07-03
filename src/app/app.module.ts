import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrverifyComponent } from './qrverify/qrverify.component';
import { HelpComponent } from './help/help.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule, FirebaseApp } from '@angular/fire';
import { LANGUAGE_CODE } from '@angular/fire/auth';
import { AuthComponent } from './auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SavedataComponent } from './savedata/savedata.component';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyCxf8-Yc9pwfRoNUvoR4lIVRwvtAmFk6_o",
  authDomain: "qrverify-7763f.firebaseapp.com",
  projectId: "qrverify-7763f",
  storageBucket: "qrverify-7763f.appspot.com",
  messagingSenderId: "261425002104",
  appId: "1:261425002104:web:6ecaf7b0b80e35c7719f8d",
  measurementId: "G-64EWDKBHTY"
};

firebase.default.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    AppComponent,
    QrverifyComponent,
    HelpComponent,
    AuthComponent,
    SavedataComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgbModule,
    FormsModule
  ],
  providers: [
    { provide: LANGUAGE_CODE, useValue: "ru"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
