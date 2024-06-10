import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp({
      "projectId":"rate-uni-js-project",
      "appId":"1:947898370714:web:bd2ce7351d5d12fb94ad23",
      "storageBucket":"rate-uni-js-project.appspot.com",
      "apiKey":"AIzaSyApfYN7FqfGhhtB6PwBI_2Ztlb7v4ntLe8",
      "authDomain":"rate-uni-js-project.firebaseapp.com",
      "messagingSenderId":"947898370714"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
