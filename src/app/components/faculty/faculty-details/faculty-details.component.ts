import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FacultyService} from "../../../services/business-logic/faculty.service";
import {Faculty} from "../../../models/base/faculty";
import {Programme} from "../../../models/base/programme";
import {environment} from "../../../../environments/environment.development";
import {ProgrammeService} from "../../../services/business-logic/programme.service";

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrl: './faculty-details.component.css'
})
export class FacultyDetailsComponent implements OnInit {
  faculty: Faculty = {} as Faculty;
  programmes: Programme[] = [];
  
  constructor(private route: ActivatedRoute,
              private facultyService: FacultyService,
              private programmeService: ProgrammeService) {}

  ngOnInit(): void {
    let facultyId = '';
    this.route.params
      .subscribe(params => {
        facultyId = params[environment.urlIds.faculty];
      });
    
    this.facultyService.getObjectById(facultyId)
      .subscribe((data: Faculty) => {
        this.faculty = data;
      })
    
    this.programmeService.getProgrammesForFaculty(facultyId)
      .subscribe((data: Programme[]) => {
        this.programmes = data;
      });
  }
}
