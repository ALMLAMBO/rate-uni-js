import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";
import {User} from "../../../models/base/user";
import {UniversityService} from "../../../services/business-logic/university.service";
import {FacultyService} from "../../../services/business-logic/faculty.service";
import {ProgrammeService} from "../../../services/business-logic/programme.service";
import {DisciplineService} from "../../../services/business-logic/discipline.service";
import {University} from "../../../models/base/university";
import {Faculty} from "../../../models/base/faculty";
import {Programme} from "../../../models/base/programme";
import {Discipline} from "../../../models/base/discipline";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    password: ['', Validators.required],
    facultyNumber: ['', Validators.required],
  });
  
  universities: University[] = [];
  faculties: Faculty[] = [];
  programmes: Programme[] = [];
  private universityName: string = '';
  private facultyName: string = '';
  private programmeName: string = '';
  
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private universityService: UniversityService,
              private facultyService: FacultyService,
              private programmeService: ProgrammeService,
              private disciplineService: DisciplineService) { }

  ngOnInit(): void {
    this.universityService.getAllObjects()
      .subscribe(universities => {
        this.universities = universities;
      })
  }
  
  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value as User,
        [this.universityName!, this.facultyName!, this.programmeName!, '']);
    }
  }

  updateUniversity($event: MatSelectChange) {
    this.universityName = $event.source.triggerValue;
    this.facultyService.getFacultyByUniversityId($event.value)
      .subscribe(faculties => {
        this.faculties = faculties;
      })
  }
  
  updateFaculty($event: MatSelectChange) {
    this.facultyName = $event.source.triggerValue;
    this.programmeService.getProgrammesForFaculty($event.value)
      .subscribe(programmes => {
        this.programmes = programmes;
      })
  }

  updateProgramme($event: MatSelectChange) {
    this.programmeName = $event.source.triggerValue;
  }
}
