import {Component, OnInit} from '@angular/core';
import {University} from "../../../models/base/university";
import {UniversityService} from "../../../services/business-logic/university.service";

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.css'
})
export class UniversitiesComponent implements OnInit {
  universities: University[] = [];
  
  constructor(private universityService: UniversityService) {
    
  }

  ngOnInit(): void {
    this.universityService.getAllObjects()
      .subscribe((universities: University[]) => {
        this.universities = universities;
        console.log(universities);
      });
  }
}
