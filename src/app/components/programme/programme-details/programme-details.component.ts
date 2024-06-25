import {Component, OnInit} from '@angular/core';
import {Discipline} from "../../../models/base/discipline";
import {Programme} from "../../../models/base/programme";
import {ActivatedRoute} from "@angular/router";
import {ProgrammeService} from "../../../services/business-logic/programme.service";
import {DisciplineService} from "../../../services/business-logic/discipline.service";
import {environment} from "../../../../environments/environment.development";

@Component({
  selector: 'app-programme-details',
  templateUrl: './programme-details.component.html',
  styleUrl: './programme-details.component.css'
})
export class ProgrammeDetailsComponent implements OnInit {
  programme: Programme = {} as Programme;
  disciplines: Discipline[] = [];

  constructor(private route: ActivatedRoute,
              private programmeService: ProgrammeService,
              private disciplineService: DisciplineService) {
  }

  ngOnInit(): void {
    let programmeId = '';
    this.route.params.subscribe(params => {
      programmeId = params[environment.urlIds.programme];
    });

    this.programmeService.getObjectById(programmeId)
      .subscribe((data: Programme) => {
        this.programme = data;
      })

    this.disciplineService.getDisciplinesForProgramme(programmeId)
      .subscribe((data: Discipline[]) => {
        this.disciplines = data;
      });
  }
}
