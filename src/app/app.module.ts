import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from "./components/main/navbar/navbar.component";
import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { AdminStatisticsComponent } from './components/user/admin-statistics/admin-statistics.component';
import { UniversitiesComponent } from './components/university/universities/universities.component';
import { UniversityDetailsComponent } from './components/university/university-details/university-details.component';
import { CreateUpdateUniversityComponent } from './components/university/create-update-university/create-update-university.component';
import { FacultiesComponent } from './components/faculty/faculties/faculties.component';
import { FacultyDetailsComponent } from './components/faculty/faculty-details/faculty-details.component';
import { ProgrammesComponent } from './components/programme/programmes/programmes.component';
import { ProgrammeDetailsComponent } from './components/programme/programme-details/programme-details.component';
import { CreateUpdateProgrammeComponent } from './components/programme/create-update-programme/create-update-programme.component';
import { DisciplinesComponent } from './components/discipline/disciplines/disciplines.component';
import { DisciplineDetailsComponent } from './components/discipline/discipline-details/discipline-details.component';
import { CreateUpdateDisciplineComponent } from './components/faculty/create-update-discipline/create-update-discipline.component';
import { ReviewsComponent } from './components/review/reviews/reviews.component';
import { ReviewDetailsComponent } from './components/review/review-details/review-details.component';
import { CreateReviewComponent } from './components/review/create-review/create-review.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailsComponent,
    AdminStatisticsComponent,
    UniversitiesComponent,
    UniversityDetailsComponent,
    CreateUpdateUniversityComponent,
    FacultiesComponent,
    FacultyDetailsComponent,
    CreateUpdateDisciplineComponent,
    ProgrammesComponent,
    ProgrammeDetailsComponent,
    CreateUpdateProgrammeComponent,
    DisciplinesComponent,
    DisciplineDetailsComponent,
    ReviewsComponent,
    ReviewDetailsComponent,
    CreateReviewComponent
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
