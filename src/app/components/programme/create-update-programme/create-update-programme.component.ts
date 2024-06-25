import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {University} from "../../../models/base/university";
import {ActivatedRoute} from "@angular/router";
import {UniversityService} from "../../../services/business-logic/university.service";
import {FacultyService} from "../../../services/business-logic/faculty.service";
import {environment} from "../../../../environments/environment.development";
import {Faculty} from "../../../models/base/faculty";
import {ProgrammeService} from "../../../services/business-logic/programme.service";
import {Programme} from "../../../models/base/programme";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-create-update-programme',
  templateUrl: './create-update-programme.component.html',
  styleUrl: './create-update-programme.component.css'
})
export class CreateUpdateProgrammeComponent {
  update: boolean = false;
  showUniversities: boolean = false;
  showFaculties: boolean = false;
  universityId: string = '';
  facultyId: string = '';
  programmeId: string = '';
  
  programmeForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]]
  });
  
  universities: University[] = [];
  faculties: Faculty[] = [];

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private universityService: UniversityService,
              private facultyService: FacultyService,
              private programmeService: ProgrammeService) {

    this.route.params
      .subscribe(params => {
        this.universityId = params[environment.urlIds.university];
        this.facultyId = params[environment.urlIds.faculty];
        this.programmeId = params[environment.urlIds.programme];
        if (this.programmeId) {
          this.programmeService.getObjectById(this.programmeId)
            .subscribe(faculty => {
              this.programmeForm.controls.title.setValue(faculty.title);
              this.programmeForm.controls.description.setValue(faculty.description);
            });

          this.update = true;
        }

        if (!this.universityId) {
          this.showUniversities = true;
          this.universityService.getAllObjects()
            .subscribe(universities => {
              this.universities = universities;
            })
        }

        if (!this.facultyId) {
          this.showFaculties = true;
        }
      })
  }

  submitProgramme() {
    if (!this.programmeForm.valid) {
      console.log("Invalid form");
    }
    else if (!this.update) {
      let programme = this.programmeForm.value as Programme;
      programme.facultyId = this.facultyId;
      this.programmeService.createObject(programme);
    }
    else {
      this.programmeService.updateObject(this.facultyId, this.programmeForm.value as Programme);
    }
  }

  updateUniversity($event: MatSelectChange) {
    this.universityId = $event.value;
    this.facultyService.getFacultyByUniversityId(this.universityId)
      .subscribe(faculties => {
        this.faculties = faculties;
      })
  }
}
