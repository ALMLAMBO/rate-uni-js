import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/main/home/home.component";
import {UniversitiesComponent} from "./components/university/universities/universities.component";
import {environment} from "../environments/environment.development";
import {UniversityDetailsComponent} from "./components/university/university-details/university-details.component";
import {FacultiesComponent} from "./components/faculty/faculties/faculties.component";
import {FacultyDetailsComponent} from "./components/faculty/faculty-details/faculty-details.component";
import {ProgrammesComponent} from "./components/programme/programmes/programmes.component";
import {ProgrammeDetailsComponent} from "./components/programme/programme-details/programme-details.component";
import {DisciplinesComponent} from "./components/discipline/disciplines/disciplines.component";
import {DisciplineDetailsComponent} from "./components/discipline/discipline-details/discipline-details.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {LoginComponent} from "./components/user/login/login.component";
import {UserDetailsComponent} from "./components/user/user-details/user-details.component";
import {AdminStatisticsComponent} from "./components/user/admin-statistics/admin-statistics.component";
import {PageNotFoundComponent} from "./components/main/page-not-found/page-not-found.component";
import {
  CreateUpdateUniversityComponent
} from "./components/university/create-update-university/create-update-university.component";
import {CreateUpdateFacultyComponent} from "./components/faculty/create-update-faculty/create-update-faculty.component";
import {
  CreateUpdateProgrammeComponent
} from "./components/programme/create-update-programme/create-update-programme.component";
import {
  CreateUpdateDisciplineComponent
} from "./components/discipline/create-update-discipline/create-update-discipline.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'universities',
    component: UniversitiesComponent
  },
  {
    path: `universities/:${environment.urlIds.university}`,
    component: UniversityDetailsComponent
  },
  {
    path: `universities/:${environment.urlIds.university}/faculties`,
    component: FacultiesComponent
  },
  {
    path: `universities/:${environment.urlIds.university}/faculties/:${environment.urlIds.faculty}`,
    component: FacultyDetailsComponent
  },
  {
    path: `universities/:${environment.urlIds.university}/faculties/:${environment.urlIds.faculty}/programmes`,
    component: ProgrammesComponent
  },
  {
    path: `universities/:${environment.urlIds.university}/faculties/:${environment.urlIds.faculty}/programmes/:${environment.urlIds.programme}`,
    component: ProgrammeDetailsComponent
  },
  {
    path: `universities/:${environment.urlIds.university}/faculties/:${environment.urlIds.faculty}/programmes/:${environment.urlIds.programme}/disciplines`,
    component: DisciplinesComponent
  },
  {
    path: `universities/:${environment.urlIds.university}/faculties/:${environment.urlIds.faculty}/programmes/:${environment.urlIds.programme}/disciplines/:${environment.urlIds.discipline}`,
    component: DisciplineDetailsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user-details',
    component: UserDetailsComponent
  },
  {
    path: 'statistics',
    component: AdminStatisticsComponent
  },
  {
    path: 'create-uni',
    component: CreateUpdateUniversityComponent
  },
  {
    path: 'create-faculty',
    component: CreateUpdateFacultyComponent
  },
  {
    path: 'create-programme',
    component: CreateUpdateProgrammeComponent
  },
  {
    path: 'create-discipline',
    component: CreateUpdateDisciplineComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
