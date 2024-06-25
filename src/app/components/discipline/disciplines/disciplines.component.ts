import {Component, Input, OnInit} from '@angular/core';
import { Discipline } from '../../../models/base/discipline';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrl: './disciplines.component.css'
})
export class DisciplinesComponent implements OnInit {
  @Input() disciplines: Discipline[] = [];
  universityId: string = '';
  facultyId: string = '';
  programmeId: string = '';
  
  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.universityId = params['universityId'];
      this.facultyId = params['facultyId'];
      this.programmeId = params['programmeId'];
    });
  }
}
