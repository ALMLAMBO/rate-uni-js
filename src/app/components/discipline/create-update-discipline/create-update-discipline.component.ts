import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {University} from "../../../models/base/university";
import {Faculty} from "../../../models/base/faculty";
import {ActivatedRoute} from "@angular/router";
import {UniversityService} from "../../../services/business-logic/university.service";
import {FacultyService} from "../../../services/business-logic/faculty.service";
import {ProgrammeService} from "../../../services/business-logic/programme.service";
import {environment} from "../../../../environments/environment.development";
import {Programme} from "../../../models/base/programme";
import {MatSelectChange} from "@angular/material/select";
import {DisciplineService} from "../../../services/business-logic/discipline.service";
import {DisciplineCategory} from "../../../vo/discipline-category";
import {DisciplineType} from "../../../vo/discipline-type";
import {Discipline} from "../../../models/base/discipline";

@Component({
  selector: 'app-create-update-discipline',
  templateUrl: './create-update-discipline.component.html',
  styleUrl: './create-update-discipline.component.css'
})
export class CreateUpdateDisciplineComponent {
  update: boolean = false;
  showUniversities: boolean = false;
  showFaculties: boolean = false;
  showProgrammes: boolean = false;
  universityId: string = '';
  facultyId: string = '';
  programmeId: string = '';
  disciplineId: string = '';
  
  disciplineForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    credits: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    lecturer: ['', [Validators.required, Validators.minLength(3)]],
    assistants: ['', [Validators.required, Validators.minLength(3)]],
    disciplineCategory: ['', [Validators.required]],
    disciplineType: ['', [Validators.required]]
  });

  universities: University[] = [];
  faculties: Faculty[] = [];
  programmes: Programme[] = [];

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private universityService: UniversityService,
              private facultyService: FacultyService,
              private programmeService: ProgrammeService,
              private disciplineService: DisciplineService) {

    this.route.params
      .subscribe(params => {
        this.universityId = params[environment.urlIds.university];
        this.facultyId = params[environment.urlIds.faculty];
        this.programmeId = params[environment.urlIds.programme];
        this.disciplineId = params[environment.urlIds.discipline];
        if (this.disciplineId) {
          this.disciplineService.getObjectById(this.programmeId)
            .subscribe(discipline => {
              this.disciplineForm.controls.name.setValue(discipline.name);
              this.disciplineForm.controls.description.setValue(discipline.description);
              this.disciplineForm.controls.credits.setValue(discipline.credits.toString());
              this.disciplineForm.controls.lecturer.setValue(discipline.lecturer);
              this.disciplineForm.controls.assistants.setValue(discipline.assistants);
              this.disciplineForm.controls.disciplineCategory.setValue(discipline.disciplineCategory);
              this.disciplineForm.controls.disciplineType.setValue(discipline.disciplineType);
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
        
        if (!this.programmeId) {
          this.showProgrammes = true;
        }
      })
  }

  submitDiscipline() {
    if (!this.disciplineForm.valid) {
      console.log("Invalid form");
    }
    else if (!this.update) {
      this.disciplineService.createDiscipline(this.programmeId, this.disciplineForm.value as unknown as Discipline);
    }
    else {
      this.disciplineService.updateObject(this.disciplineId, this.disciplineForm.value as unknown as Discipline);
    }
  }

  updateUniversity($event: MatSelectChange) {
    this.universityId = $event.value;
    this.facultyService.getFacultyByUniversityId(this.universityId)
      .subscribe(faculties => {
        this.faculties = faculties;
      })
  }
  
  updateFaculty($event: MatSelectChange) {
    this.facultyId = $event.value;
    this.programmeService.getProgrammesForFaculty(this.facultyId)
      .subscribe(programmes => {
        this.programmes = programmes;
      })
  }

  protected readonly Object = Object;
  protected readonly DisciplineCategory = DisciplineCategory;
  protected readonly DisciplineType = DisciplineType;
}
