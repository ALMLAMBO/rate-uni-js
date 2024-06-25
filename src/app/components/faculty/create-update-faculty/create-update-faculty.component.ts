import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FacultyService} from "../../../services/business-logic/faculty.service";
import {environment} from "../../../../environments/environment.development";
import {FormBuilder, Validators} from "@angular/forms";
import {Faculty} from "../../../models/base/faculty";
import {UniversityService} from "../../../services/business-logic/university.service";
import {University} from "../../../models/base/university";

@Component({
  selector: 'app-create-update-faculty',
  templateUrl: './create-update-faculty.component.html',
  styleUrl: './create-update-faculty.component.css'
})
export class CreateUpdateFacultyComponent {
  update: boolean = false;
  showUniversities: boolean = false;
  universityId: string = '';
  facultyId: string = '';
  facultyForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    dean: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', [Validators.required, Validators.minLength(3)]]
  });
  universities: University[] = [];
  
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private universityService: UniversityService,
              private facultyService: FacultyService) {
  
    this.route.params
      .subscribe(params => {
        this.universityId = params[environment.urlIds.university];
        this.facultyId = params[environment.urlIds.faculty];
        if (this.facultyId) {
          this.facultyService.getObjectById(this.facultyId)
            .subscribe(faculty => {
              this.facultyForm.controls.name.setValue(faculty.name);
              this.facultyForm.controls.dean.setValue(faculty.dean);
              this.facultyForm.controls.address.setValue(faculty.address);
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
      })
  }
  
  submitFaculty() {
    if (!this.facultyForm.valid) {
      console.log("Invalid form");
    }
    else if (!this.update) {
      let faculty = this.facultyForm.value as Faculty;
      faculty.universityId = this.universityId;
      this.facultyService.createObject(faculty);
    }
    else {
      this.facultyService.updateObject(this.facultyId, this.facultyForm.value as Faculty);
    }
  }
}
