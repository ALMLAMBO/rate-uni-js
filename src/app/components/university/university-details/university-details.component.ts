import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UniversityService} from "../../../services/business-logic/university.service";
import {University} from "../../../models/base/university";
import {Faculty} from "../../../models/base/faculty";
import {FacultyService} from "../../../services/business-logic/faculty.service";
import {environment} from "../../../../environments/environment.development";

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrl: './university-details.component.css'
})
export class UniversityDetailsComponent implements OnInit {
  university: University = {} as University;
  faculties: Faculty[] = [];

  constructor(private route: ActivatedRoute,
              private universityService: UniversityService,
              private facultyService: FacultyService) {

  }

  ngOnInit(): void {
    let universityId = '';
    this.route.params.subscribe(params => {
      universityId = params[environment.urlIds.university];
    });

    this.universityService.getObjectById(universityId)
      .subscribe((data: University) => {
        this.university = data;
      });

    this.facultyService.getFacultyByUniversityId(universityId)
      .subscribe((data: Faculty[]) => {
        this.faculties = data;
      });

    console.log(this.university)
    console.log(this.faculties)
  }
}
