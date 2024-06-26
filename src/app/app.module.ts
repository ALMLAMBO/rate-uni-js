import {importProvidersFrom, NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from "./components/main/navbar/navbar.component";
import { HomeComponent } from './components/main/home/home.component';
import { UnathorizedComponent } from './components/main/unathorized/unathorized.component';
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
import { ReviewsComponent } from './components/review/reviews/reviews.component';
import { ReviewDetailsComponent } from './components/review/review-details/review-details.component';
import { CreateReviewComponent } from './components/review/create-review/create-review.component';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatDivider} from "@angular/material/divider";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";
import {provideHttpClient} from "@angular/common/http";
import {MatList, MatListItem, MatListItemLine, MatListItemMeta} from "@angular/material/list";
import {MatTabLabelWrapper} from "@angular/material/tabs";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FlexLayoutServerModule} from "@angular/flex-layout/server";
import { Base64Pipe } from './pipes/base64.pipe';
import { PageNotFoundComponent } from './components/main/page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {environment} from "../environments/environment.development";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from "@angular/fire/compat";
import {MatToolbar} from "@angular/material/toolbar";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import { CreateUpdateFacultyComponent } from './components/faculty/create-update-faculty/create-update-faculty.component';
import {MatOption, MatSelect} from "@angular/material/select";
import {
  CreateUpdateDisciplineComponent
} from "./components/discipline/create-update-discipline/create-update-discipline.component";

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
    CreateUpdateFacultyComponent,
    ProgrammesComponent,
    ProgrammeDetailsComponent,
    CreateUpdateProgrammeComponent,
    DisciplinesComponent,
    DisciplineDetailsComponent,
    CreateUpdateDisciplineComponent,
    ReviewsComponent,
    ReviewDetailsComponent,
    CreateReviewComponent,
    PageNotFoundComponent,
    UnathorizedComponent,
    Base64Pipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatGridList,
    MatGridTile,
    MatCardSubtitle,
    MatCardTitleGroup,
    MatCardTitle,
    MatLabel,
    MatButton,
    MatDivider,
    MatCheckbox,
    MatIcon,
    MatList,
    MatListItem,
    MatTabLabelWrapper,
    MatListItemLine,
    MatListItemMeta,
    FlexLayoutModule,
    FlexLayoutServerModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatCardActions,
    MatToolbar,
    MatAnchor,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatSelect,
    MatOption,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebaseOptions)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    importProvidersFrom([
      AngularFireModule.initializeApp(environment.firebaseOptions)
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
